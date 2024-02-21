<?php

namespace App\Http\Controllers;

use App\Enums\OrderEnum;
use App\Models\Category;
use App\Models\City;
use App\Models\Course;
use App\Models\FileUpload;
use App\Models\Order;
use App\Models\OrderHistory;
use App\Models\PaymentMethod;
use App\Models\Products;
use App\Models\PromoCode;
use App\Models\User;
use App\Notifications\InvoiceNotification;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\CoreApi;

class PurchaseController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index']);
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Products $products)
    {
        // $dataDibimbing = Category::where('slug', 'like', 'dibimbing%')->first()->products;
        $dataDibimbing = Products::whereHas('category', function ($query) {
            $query->where('slug', 'LIKE', 'dibimbing%');
        })
            ->where('is_visible', true)
            ->with('category', 'productType')->get();
        $dataEbook = Products::whereHas('productType', function ($query) {
            $query->where('slug', 'e-book');
        })->with('productType', 'category')->get();
        $dataWebinar = Products::whereHas('productType', function ($query) {
            $query->where('slug', 'webinar');
        })->with('productType', 'category')->get();
        return Inertia::render('Main/Produk', [
            'dataDibimbing' => $dataDibimbing,
            'ebookData' => $dataEbook,
            'webinarData' => $dataWebinar,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        // dd($request->admin);
        $user = User::where('id', Auth::user()->id)->first();
        $validateData = $request->validate([
            'schedule' => 'required|date',
            'init_price' => 'required',
            'purchase_method' => 'required',
        ]);

        // jika user menggunakan promo code
        if ($request->promo) {
            $cekPromo = PromoCode::where('promo_code', $request->promo)->first();
            if (!$cekPromo) {
                return response()->json(['message' => 'promo tidak ditemukan!']);
            }
            if ($user->kodePromo()->where('promo_code_id', $cekPromo->id)->exists()) {
                return response()->json(['message' => 'promo sudah anda gunakan, cari promo lain!']);
            } else {
                $user->kodePromo()->attach($cekPromo->id);
            }
        }

        $quantity = 1;
        $adminFee = 0;
        $discount = 0;
        $responseMidtrans = null;
        $order_code = 'GA' . str(now()->format('YmdHis'));

        $paymentMethod = PaymentMethod::where('name', $validateData['purchase_method']['name'])->first();
        $getProduct = Products::where('id', $request['product_id'])->with('categories')->first();

        // cek date
        $cekDate = Course::where('date', $validateData['schedule'])->count();
        if ($cekDate > 7) {
            return response()->json(['kuota telah habis']);
        }

        // cek user menggunakan kode promo
        if ($request->promo) {
            $cekPromo = PromoCode::where('promo_code', $request->promo)->first();
            if (!$cekPromo) {
                return response()->json(['message' => 'Promo tidak ditemukan!']);
            }

            if ($cekPromo->is_price == 1) {
                $discount = $cekPromo->value;
            } else {
                $discount = ($cekPromo->value / 100) * $getProduct->price;
            }
        }

        // charge midtrans
        $price = $getProduct->price + $request->add_on_price;
        $phoneNumber = $user->profile->phone_number ?? '';

        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = config('midtrans.is_sanitized');
        Config::$is3ds = config('midtrans.is_3ds');

        switch ($paymentMethod->category) {
            case "ewallet":
                switch ($paymentMethod->payment_type) {
                    case "gopay":
                        $adminFee = ($paymentMethod->admin_fee / 100) * $price;
                        break;
                    case "qris":
                        $adminFee = round(($paymentMethod->admin_fee / 100) * $price);
                        break;
                    case "shopeePay":
                        $adminFee = ($paymentMethod->admin_fee / 100) * $price;
                        break;
                }

                if ($adminFee != $request->admin) {
                    return response()->json(['message' => 'pembelian tidak valid!', 'admin' => $adminFee, 'req' => $request->admin]);
                }

                // $grossAmount = $price - $discount + $adminFee;
                $grossAmount = $request['total_price'];
                $params = array(
                    'payment_type' => $paymentMethod->payment_type,
                    'transaction_details' => array(
                        'order_id' => $order_code,
                        'gross_amount' => $grossAmount,
                    ),
                    'customer_details' => array(
                        'first_name' => $user->name,
                        'last_name' => '',
                        'email' => $user->email,
                        'phone' => $phoneNumber,
                    ),
                );
                try {
                    $responseMidtrans = CoreApi::charge($params);
                } catch (Exception $e) {
                    return response()->json(['message' => $e->getMessage()], 500);
                }
                break;

            case "bank_transfer":
                $adminFee = $paymentMethod->admin_fee;
                $grossAmount = $price - $discount + $adminFee;
                $params = array(
                    'payment_type' => 'bank_transfer',
                    'transaction_details' => array(
                        'order_id' => $order_code,
                        'gross_amount' => $grossAmount,
                    ),
                    'customer_details' => array(
                        'first_name' => $user->name,
                        'last_name' => '',
                        'email' => $user->email,
                        'phone' => $phoneNumber,
                    ),
                    'bank_transfer' => array(
                        'bank' => $paymentMethod->payment_type,
                    ),
                );
                try {
                    $responseMidtrans = CoreApi::charge($params);
                } catch (Exception $e) {
                    return response()->json(['message' => $e->getMessage()], 500);
                }
                break;
        }

        //cek produk bimbingan
        $produkDibimbing = false;
        foreach ($getProduct->categories as $category) {
            if (stripos($category->slug, 'dibimbing') !== false) {
                $produkDibimbing = true;
            }
        }

        $order = Order::create([
            'user_id' => $user->id,
            'products_id' => $getProduct->id,
            'payment_method_id' => $paymentMethod->id,
            'order_code' => $order_code,
            'quantity' => $quantity,
            'unit_price' => $getProduct->price,
            'status' => OrderEnum::PENDING->value,
            'notes' => $request['note'],
        ]);

        OrderHistory::create([
            'order_id' => $order->id,
            'status' => 'pending',
            'payload' => json_encode($responseMidtrans),
        ]);

        // jika produk = bimbingan | store -> course
        $city = $request['city'] ?? '';
        if ($produkDibimbing) {
            if ($getProduct->features[0]['category'] == 'online') {
                $location = 'Zoom meeting';
            } elseif ($getProduct->features[0]['category'] == 'offline') {
                $city = $request['city'] ?? '';
                $location = $request['place'];
            }

            $course = Course::create([
                'user_id' => $user->id,
                'products_id' => $request->product_id,
                'order_id' => $order->id,
                'date' => $validateData['schedule'],
                'city' => $city,
                'location' => $location,
                'note' => $request['note'],
            ]);
        }

        foreach ($request->add_on as $addon) {
            $course->addOns()->attach($addon['id']);
        }

        if ($request->hasFile('document')) {
            $file = $request->file('document');
            $path = $file->store('/public/file_uploads');

            $upload = new FileUpload();
            $upload->course_id = $course->id;
            $upload->filename = $file->getClientOriginalName();
            $upload->slug = Str::slug($file->getClientOriginalName());
            $upload->mime_type = $file->getMimeType();
            $upload->path = $path;
            $upload->size = $file->getSize();
            $upload->save();

            $course->fileUploads()->attach($upload->id);
        }
        $user->notify(new InvoiceNotification($order));
        return redirect()->route('purchase.status', $order->order_code);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $order)
    {
        // cek kondisi tanggal
        $endDate = Carbon::now()->addDays(7);

        $counts = Course::select('date')
            ->selectRaw('COUNT(*) as count')
            ->whereBetween('date', [Carbon::today(), $endDate])
            ->groupBy('date')
            ->havingRaw('COUNT(*) > 5')
            ->get();
        // end cek kondisi tanggal

        $paymentMethods = PaymentMethod::all();

        $product = Products::where('slug', $order)
            ->with('category')
            ->with('addOns')
            ->first();
        // dd($product);
        $addOns = $product->addOns;
        $cities = City::with('places')->get();
        $topics = $product->topics;
        return Inertia::render('Purchase/Form', [
            'date' => $counts,
            'addOns' => $addOns,
            'cities' => $cities,
            'topics' => $topics,
            'paymentMethods' => $paymentMethods,
            'dataProduct' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

}

<?php

namespace App\Http\Controllers\Admin\Bimbingan;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
                // $perPage = $request->input('perPage', 10);
                // $search = $request->input('search');

                $query = Order::with(['paymentMethod:id,name', 'user:id,username,name', 'products:id,product_type_id,category_id,name,product_image', 'products.category:id,name', 'products.productType:id,type'])
                    ->whereHas('products', function ($query) {
                        $query->whereHas('productType', function ($subQuery) {
                            $subQuery->where('type', 'LIKE', '%bimbingan%');
                        });
                    });

                // if ($search) {
                //     $query->whereHas('user', function ($userQuery) use ($search) {
                //         $userQuery->where('username', 'LIKE', "%$search%");
                //     });
                // }

                $orders = $query->get();

                // return response()->json([
                // 'status' => true,
                // 'statusCode' => 200,
                // 'message' => 'get data success',
                //  'orders' => $orders]);
            return Inertia::render('Auth/Admin/Bimbingan/Order', [
                'status' => true,
                'statusCode' => 200,
                'message' => 'get data history success',
                'orders' => $orders,
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'statusCode' => 404,
                'message' => 'Data not found.',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'statusCode' => 500,
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
}

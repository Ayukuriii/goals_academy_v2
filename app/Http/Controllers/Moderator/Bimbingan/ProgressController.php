<?php

namespace App\Http\Controllers\Moderator\Bimbingan;

use App\Enums\CourseStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\FileUpload;
use App\Models\Order;
use App\Models\Place;
use App\Models\Revenue;
use App\Models\User;
use App\Notifications\GeneralCourseNotification;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            if (Auth::user()->user_role == "moderator") {
                $perPage = $request->input("perPage", 25);
                $search = $request->input("search");

                $query = Order::with([
                    "user:id,username",
                    "products:id,product_type_id,category_id,name,total_meet",
                    "products.category:id,name",
                    "products.productType:id,type",
                    "course:id,order_id,is_user,is_tutor,is_moderator,date,time,location,ongoing,session,tutor_id",
                    "course.child:id,parent_id,order_id,is_user,is_tutor,is_moderator,date,time,location,ongoing,session",
                    "course.tutor",
                ])
                    ->whereHas("products", function ($query) {
                        $query->whereHas("productType", function ($subQuery) {
                            $subQuery->where("type", "LIKE", "%bimbingan%");
                        });
                    })
                    ->whereHas("course", function ($courseQuery) {
                        $courseQuery->where("ongoing", CourseStatusEnum::ONGOING);
                    })
                    ->where("status", "Success");

                $query->orderBy("updated_at", "desc");

                if ($search) {
                    $query->whereHas("user", function ($userQuery) use ($search) {
                        $userQuery->where("name", "LIKE", "%$search%");
                    });
                }

                $orders = $query->paginate($perPage);
                // dd($orders);
                return Inertia::render("Auth/Moderator/Bimbingan/Progress", [
                    "status" => true,
                    "statusCode" => 200,
                    "message" => "Get data history success",
                    "data" => [
                        "recent_order" => $orders,
                    ],
                ], 200);
            } else {
                abort(403);
            }
        } catch (QueryException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An error occurred while fetching data: " . $e->getMessage(),
            ], 500);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An unexpected error occurred: " . $e->getMessage(),
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

    // $progress diambil dari course id bukan order id
    public function show(Course $progress)
    {
        try {
            $tutors = User::with("profile")->where("user_role", "tutor")->get();
            if (Auth::user()->user_role == "moderator") {
                $progress_user = Course::with("user:id,username", "user.profile:id,user_id,university,major,phone_number,faculty", "tutor:id,name", "topic:id,topic", "place", "place.city", "order:id,order_code", "products:id,name,contact_type", "fileUploads", "productReview")->findOrFail($progress->id);
                // return response()->json([
                //     "status" => true,
                //     "statusCode" => 200,
                //     "message" => "Get data success",
                //     "data" => $progress_user,
                // ], 200);

                return Inertia::render("Auth/Moderator/Bimbingan/Progress/View", [
                    "progress" => $progress_user,
                    "tutors" => $tutors,
                ]);
            } else {
                abort(403);
            }
        } catch (ModelNotFoundException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 404,
                "message" => "Course not found.",
            ], 404);
        } catch (AuthorizationException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 403,
                "message" => $e->getMessage(),
            ], 403);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An unexpected error occurred: " . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $progress)
    {
        $tutors = User::with("profile")->where("user_role", "tutor")->get();
        $progress->load("user.profile", "order", "products", "topic", "productReview", "addOns", "place", "place.city", 'products.category');
        return Inertia::render("Auth/Moderator/Bimbingan/Progress/Edit", [
            "progress" => $progress,
            "tutors" => $tutors,
            "places" => Place::with("city")->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $progress)
    {
        // dd($request->all());
        try {
            if (Auth::user()->user_role == "moderator") {
                if ($progress->ongoing == "selesai") {
                    return response()->json(["status" => false, "statusCode" => 403, "message" => "Progress sudah selesai dan tidak dapat diubah"], 403);
                }

                if ($progress->products->total_meet > 1) {
                    if ($progress->products->contact_type == "online") {
                        $validateData = $request->validate([
                            'tutor_id' => 'required|numeric',
                            'location' => 'required|string',
                            "date" => "required|date",
                            "time" => "required|date_format:H:i",
                            "record" => "mimes:pdf|nullable",
                        ]);
                        $progress->update($validateData);
                    }
                    if ($progress->products->contact_type == "offline") {
                        $validateData = $request->validate([
                            'tutor_id' => 'numeric',
                            'place_id' => 'numeric',
                            "date" => "required|date",
                            "time" => "required|date_format:H:i",
                        ]);
                        $progress->update($validateData);
                    }
                    if ($progress->products->contact_type == "hybrid") {
                        $validateData = $request->validate([
                            'tutor_id' => 'numeric',
                            'place_id' => 'nullable|numeric',
                            'location' => 'nullable|string',
                            "date" => "required|date",
                            "time" => "required|date_format:H:i",
                            "record" => "mimes:pdf|nullable",
                        ]);
                        $progress->update($validateData);
                    }
                } else {
                    if ($progress->products->contact_type == "online") {
                        $validateData = $request->validate([
                            'tutor_id' => 'required|numeric',
                            'location' => 'required|string',
                            "date" => "required|date",
                            "time" => "required|date_format:H:i",
                            "record" => "mimes:pdf|nullable",
                        ]);
                        $progress->update($validateData);
                    }
                    if ($progress->products->contact_type == "offline") {
                        $validateData = $request->validate([
                            'tutor_id' => 'numeric',
                            'place_id' => 'numeric',
                            "date" => "required|date",
                            "time" => "required|date_format:H:i",
                        ]);
                        $progress->update($validateData);
                    }
                    if ($progress->products->contact_type == "hybrid") {
                        $validateData = $request->validate([
                            'tutor_id' => 'numeric',
                            'place_id' => 'nullable|numeric',
                            'location' => 'nullable|string',
                            "date" => "required|date",
                            "time" => "required|date_format:H:i",
                            "record" => "mimes:pdf|nullable",
                        ]);
                        $progress->update($validateData);
                    }
                    if ($progress->products->contact_type == "other") {
                        $validateData = $request->validate([
                            // 'tutor_id' => 'numeric',
                            // 'place_id' => 'nullable|numeric',
                            // 'location' => 'nullable|string',
                            // "date" => "required|date",
                            // "time" => "required|date_format:H:i",
                            // "record" => "mimes:pdf|nullable",
                        ]);
                        $progress->update($validateData);
                    }
                }

                if ($request->hasFile("record")) {
                    $uploadedFile = $request->file("record");

                    $fileName = Str::random(8) . "-" . time() . "." . $uploadedFile->getClientOriginalExtension();
                    $filePath = Storage::putFileAs("file_uploads/record", $uploadedFile, $fileName);

                    $file = new FileUpload();

                    $file->course_id = $progress->id;
                    $file->user_id = Auth::user()->id;
                    $file->path = $filePath;
                    $file->filename = $fileName;
                    $file->size = $uploadedFile->getSize();
                    $file->slug = Str::slug(pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME));
                    $file->mime_type = $uploadedFile->getMimeType();
                    $file->name = $uploadedFile->getClientOriginalName();
                    $file->save();
                }

                $progress->user->notify(new GeneralCourseNotification("Tutor Sudah Ditemukan!", "Bimbingan {$progress->order->order_code} sesi {$progress->session} terdapat update, yuk cek segera!", route('user.profile.detailPembelajaran', ['order_id' => $progress->order->order_code])));
                $progress->tutor->notify(new GeneralCourseNotification("Update pada Bimbingan", "Bimbingan {$progress->order->order_code} sesi {$progress->session} terdapat update dari moderator, yuk cek segera!", route('tutor.bimbingan.progress.edit', ['progress' => $progress->id])));
                return redirect()->route("moderator.bimbingan.progress.index")->with("success", "Update progress berhasil");
            } else {
                abort(403);
            }
        } catch (ValidationException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 422,
                "message" => "Validation error: " . $e->getMessage(),
                "errors" => $e->errors(),
            ], 422);
        } catch (AuthorizationException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 403,
                "message" => $e->getMessage(),
            ], 403);
        } catch (QueryException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An error occurred while updating progress: " . $e->getMessage(),
            ], 500);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An unexpected error occurred: " . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $progress)
    {
        //
    }

    public function confirmBimbingan(Request $req, Course $progress)
    {
        try {
            if ($progress->ongoing == "selesai") {
                // return response()->json(["status" => false, "statusCode" => 403, "message" => "Progress sudah selesai dan tidak dapat diubah"], 403);
                return redirect()->back()->with("error", "Progress sudah selesai dan tidak dapat diubah");
            }
            $addons_price = $progress->addOns->sum('price');
            if ($progress->products->contact_type != "other") {
                $validateData = $req->validate([
                    "duration_per_meet" => "required|numeric",
                ]);
                if ($progress->is_tutor == 1) {
                    Revenue::create([
                        'tutor_id' => $progress->tutor_id,
                        'course_id' => $progress->id,
                        'revenue_type_id' => $progress->tutor->revenue_type_id,
                        'amount' => floor(((($progress->products->price / $progress->products->total_meet) + $addons_price) * $progress->tutor->revenue_type->type) / 100),
                        'category' => 'pemasukan',
                    ]);
                    $progress->update(array_merge($validateData, ["ongoing" => "selesai", "is_moderator" => 1]));
                } else {
                    $progress->update(array_merge($validateData, ["is_moderator" => 1]));
                }
            } else {
                if ($progress->is_tutor == 1) {
                    $progress->update([
                        "ongoing" => "selesai",
                        "is_moderator" => 1,
                    ]);
                    Revenue::create([
                        'tutor_id' => $progress->tutor_id,
                        'course_id' => $progress->id,
                        'revenue_type_id' => $progress->tutor->revenue_type_id,
                        'amount' => floor((($progress->products->price + $addons_price) * $progress->tutor->revenue_type->type) / 100),
                        'category' => 'pemasukan',
                    ]);
                } else {
                    $progress->update([
                        "is_moderator" => 1,
                    ]);
                }
            }
            // return response()->json(["status" => true, "statusCode" => 200, "message" => "Progress berhasil diperbarui menjadi selesai"], 200);
            $progress->user->notify(new GeneralCourseNotification("Progress Bimbingan telah Diupdate!", "Bimbingan {$progress->order->order_code} sesi {$progress->session} telah ditandai selesai!", route('user.profile.detailPembelajaran', ['order_id' => $progress->order->order_code])));
            return redirect()->back()->with("success", "Progress berhasil diperbarui menjadi selesai");
        } catch (ValidationException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 422,
                "message" => "Validation error: " . $e->getMessage(),
                "errors" => $e->errors(),
            ], 422);
        } catch (AuthorizationException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 403,
                "message" => $e->getMessage(),
            ], 403);
        } catch (QueryException $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An error occurred while updating progress: " . $e->getMessage(),
            ], 500);
        } catch (Exception $e) {
            return response()->json([
                "status" => false,
                "statusCode" => 500,
                "message" => "An unexpected error occurred: " . $e->getMessage(),
            ], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Admin\ManajemenUser;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TutorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            if (Auth::user()->user_role == "admin") {
                $search = $request->input('search');
                $perPage = $request->input('perPage', 10);

                $query = User::where("user_role", "tutor");

                if ($search) {
                    $query->where(function ($subquery) use ($search) {
                        $subquery->where('name', 'LIKE', "%$search%")
                            ->orWhere('username', 'LIKE', "%$search%");
                    });
                }
                $tutors = $query->paginate($perPage);

                return Inertia::render('Auth/Admin/ManajemenUser/Tutor', [
                    'status' => true,
                    'statusCode' => 200,
                    'message' => 'get data success',
                    'data' => $tutors,
                ], 200);
            } else {
                abort(403);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Failed to retrieve data. Internal Server Error'], 500);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Internal Server Error'], 500);
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
    public function show(User $tutor)
    {
        try {
            if (Auth::user()->user_role == "admin") {
                $tutorWithProfile = User::with('profile')->where("user_role", "tutor")->findOrFail($tutor->id);

                return response()->json([
                    'status' => true,
                    'statusCode' => 200,
                    'message' => 'get data success',
                    'data' => $tutorWithProfile,
                ], 200);
            } else {
                abort(403);
            }
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['status' => false, 'statusCode' => 404, 'message' => 'User not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $tutor)
    {
        try {
            if (Auth::user()->user_role == "admin") {
                $validatedData = $request->validate([
                    'name' => 'string',
                    'username' => 'string',
                    'phone_number' => 'string',
                    'university' => 'string',
                    'major' => 'string',
                ]);

                $tutor->update($validatedData);

                $tutor->profile->update($validatedData);

                return response()->json(['status' => true, 'statusCode' => 200, 'message' => 'update success'], 200);
            } else {
                abort(403);
            }
        } catch (ValidationException $e) {
            return response()->json(['status' => false, 'statusCode' => 422, 'message' => $e->validator->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $tutor)
    {
        //
    }
}

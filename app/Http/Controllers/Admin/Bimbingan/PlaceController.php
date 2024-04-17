<?php

namespace App\Http\Controllers\Admin\Bimbingan;

use App\Models\Place;
use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PlaceController extends Controller
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

                $query = Place::query()->with('city');

                if ($search) {
                    $query->where('place', 'LIKE', "%$search%");
                }

                $places = $query->paginate($perPage);

                return Inertia::render('Auth/Admin/Bimbingan/Place', [
                    'status' => true,
                    'statusCode' => 200,
                    'message' => 'get data success',
                    'data' => $places,
                ], 200);
            } else {
                abort(403);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Failed to retrieve data. Internal Server Error', 'error' => $e->getMessage()], 500);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Internal Server Error', 'error' => $e->getMessage()], 500);
        }
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $city = City::get();
        return response()->json(['status' => true, 'statusCode' => 200, 'data' => $city], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            if (Auth::user()->user_role == "admin") {
                $validateData = $request->validate([
                    'city_id' => 'required|numeric',
                    'place' => 'required|string',
                ]);

                $place = new Place();
                $place->city_id = $validateData['city_id'];
                $place->place = $validateData['place'];

                $place->save();

                return response()->json(['status' => true, 'statusCode' => 201, 'message' => 'create place success', 'data' => $place], 201);
            } else {
                abort(403);
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['status' => false, 'statusCode' => 422, 'message' => 'Validation failed', 'errors' => $e->errors()], 422);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Failed to create place. Internal Server Error'], 500);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }



    /**
     * Display the specified resource.
     */
    public function show(Place $place)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Place $place)
    {
        if (Auth::user()->user_role == "admin") {
            $cities = City::get();
            $place->load('city');
            //  return response()->json(['status' => true, 'statusCode' => 200, 'data' => [
            //     'cities' => $cities,
            //     'place' => $place
            // ]], 200);
            return Inertia::render('Auth/Admin/Bimbingan/Product/Update');
        } else {
            abort(403);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Place $place)
    {
        try {
            if (Auth::user()->user_role == "admin") {
                $validateData = $request->validate([
                    'city_id' => 'numeric',
                    'place' => 'string',
                ]);

                $place->update($validateData);
                return response()->json(['status' => true, 'statusCode' => 200, 'message' => 'update place success'], 200);
            } else {
                abort(403);
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['status' => false, 'statusCode' => 422, 'message' => $e->errors()], 422);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['status' => false, 'statusCode' => 404, 'message' => 'Place not found'], 404);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Failed to update place. Internal Server Error'], 500);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Place $place)
    {
        try {
            if (Auth::user()->user_role == "admin") {
                $place->delete();
                return response()->json(['status' => true, 'statusCode' => 200, 'message' => 'delete place success'], 200);
            } else {
                abort(403);
            }
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Failed to delete place. Internal Server Error'], 500);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => 'Internal Server Error'], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function index()
    {
        // LOGIN/REGISTER VIEW HERE...
        return Inertia::render('Auth/Form', ['title' => 'login']);
    }

    public function login(Request $request)
    {
        // dd(auth()->user()->username);
        $validateData = $request->validate([
            'email' => 'required|email:dns|exists:users,email',
            'password' => 'required|min:8',
        ]);

        if (Auth::attempt($validateData, true)) {
            $request->session()->regenerate();
            $user = auth()->user();
            Log::info("User {username} has been Log in.", ['username' => $user->username]);
            return redirect(RouteServiceProvider::HOME);
        } else {
            return redirect()->back()->with('message', ['login' => 'Email or password is invalid!']);
        }
    }

    public function register(Request $request)
    {
        // dd($request);
        $validateData = $request->validate([
            'username' => 'required|min:8|max:15|unique:users,username',
            'email' => 'required|email:dns|unique:users,email',
            'password' => 'required|min:8',
            'confirmation_password' => 'required|min:8|same:password'
        ]);

        $request['password'] = Hash::make($request['password']);

        $user = User::create($validateData);

        $userProfile = UserProfile::create([
            'user_id' => $user['id'],
        ]);

        event(new Registered($user));

        Auth::login($user, true);

        return redirect(RouteServiceProvider::HOME);
    }

    public function logout(Request $request)
    {
        Log::info("User {name} has been Log out.", ['name' => auth()->user()->name]);
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(RouteServiceProvider::HOME);
    }
}

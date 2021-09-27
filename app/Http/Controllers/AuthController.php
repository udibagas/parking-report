<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate(['email' => 'required', 'password' => 'required']);

        $user = User::where('name', $request->email)
            ->orWhere('email', $request->email)
            ->first();

        if (!$user) {
            return response(['message' => 'User tidak terdaftar'], 404);
        }

        if (!$user->active) {
            return response(['message' => 'User tidak aktif. Silakan hubungi Admin.'], 401);
        }

        if ($user->customer && !$user->customer->active) {
            return response(['message' => 'Pelanggan tidak aktif. Silakan hubungi Admin.'], 401);
        }

        if (password_verify($request->password, $user->password)) {
            Auth::login($user, true);

            return response()->json([
                'token' => $user->createToken($request->device_name ?: 'web')->plainTextToken,
                'user' => $user
            ]);
        }

        return response(['message' => 'Mohon periksa kembali password Anda.'], 401);
    }


    public function logout()
    {
        return response('', 204);
    }

    public function me(Request $request)
    {
        return ['user' => $request->user()->load(['customer'])];
    }
}

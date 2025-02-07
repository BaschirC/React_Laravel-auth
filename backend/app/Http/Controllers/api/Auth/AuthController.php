<?php

namespace App\Http\Controllers\api\Auth;

use App\Actions\Users\CreateUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Resources\BaseResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request, CreateUser $createUser): JsonResponse
    {
        $createUser(
            name: $request->input('name'),
            email: $request->input('email'),
            password: $request->input('password'),
        );

        return response()->json([
            'status' => 'user-created',
        ]);
    }

    public function login(LoginRequest $request): BaseResource
    {
        $credentials = $request->only(['email', 'password']);

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'status' => 'invalid-credentials',
                    'message' => 'Invalid email or password'
                ], 401);
            }

            $user = Auth::user();

            \Log::info('Login successful', [
                'user_id' => $user->id,
                'email' => $user->email
            ]);

            // Return the token and user data
            return new BaseResource(true, 'Login successful', [
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'bearer',
                // Remove the factory() call that was causing the error
                'expires_in' => config('jwt.ttl') * 60 // Get TTL from config, convert minutes to seconds
            ]);
        } catch (\Exception $e) {
            \Log::error('Login failed', [
                'error' => $e
            ]);

            return new BaseResource(false, 'error', [
                'status' => 'error',
                'message' => 'Could not create token'
            ]);
        }
    }

    public function logout(): Response
    {
        Auth::logout();

        return response()->noContent();
    }

    public function refresh(): BaseResource
    {
        $token = Auth::refresh();

        return new BaseResource(true, 'Refresh token successful', [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => config('jwt.ttl') * 60 // Get TTL from config, convert minutes to seconds
        ]);
    }
}
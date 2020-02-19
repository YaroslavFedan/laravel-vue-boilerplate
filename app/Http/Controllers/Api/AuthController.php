<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{


  public function login(Request $request)
  {

    $http = new \GuzzleHttp\Client;

    try {

      $response = $http->post(config('services.passport.login_endpoint'), [
        'form_params' => [
          'grant_type' => 'password',
          'client_id' => config('services.passport.client_id'),
          'client_secret' => config('services.passport.client_secret'),
          'username' => $request->username,
          'password' => $request->password,
        ]
      ]);

      return $response->getBody();
    } catch (\GuzzleHttp\Exception\BadResponseException $e) {

      if ($e->getCode() === 400)
        return response()->json(["errors" => ["password" => "Your credentials are incorrect. Please try again"]], 422);

      return response()->json('Something went wrong on the server.', $e->getCode());
    }
  }


  public function register(RegisterRequest $request)
  {

    $user = new User($request->all());
    $user->password = Hash::make($request->password);
    $user->save();

    return response()->json('Registration completed successfully', 200);
  }


  public function logout()
  {
    auth()->user()->tokens->each(function ($token, $key) {
      $token->delete();
    });

    return response()->json('Logged out successfully', 200);
  }
}

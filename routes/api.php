<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')->group(function () {

  Route::post('/login', 'AuthController@login');
  Route::post('/register', 'AuthController@register');

  Route::middleware('auth:api')->group(function () {

    Route::get('security', "SecurityController@index");
    Route::post('security', "SecurityController@verify");
    Route::patch('security', "SecurityController@toggle");

    // get, update user profile
    Route::get('profile', "UserController@index");
    Route::patch('profile', "UserController@update")->middleware('throttle:5,10');

    // change user password
    Route::patch('changePassword', "UserController@changePassword")->middleware('throttle:5,10');

    Route::post('/logout', 'AuthController@logout');
  });


  Route::any('{url?}/{sub_url?}', function () {
    return response()->json([
      'status'    => false,
      'message'   => 'Page Not Found.',
    ], 404);
  });
});

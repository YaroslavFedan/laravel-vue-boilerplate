<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Profile;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserProfileRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Resources\UserWithProfile as UserWithProfileResource;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

  public function index()
  {
    return  new UserWithProfileResource(Auth::user());
  }


  public function update(UserProfileRequest $request)
  {
    $user = Auth::user();

    $user->update(['name' => $request->name]);

    $input = $request->only('first_name', 'last_name', 'company', 'address', 'avatar');

    if ($user->profile == null) {
      $profile = new Profile();
      $profile->fill($input);
      $user->profile()->save($profile);
      $user->refresh();
    } else {
      $user->profile->fill($input)->save();
    }

    return new UserWithProfileResource($user);
  }


  public  function changePassword(ChangePasswordRequest $request)
  {
    $user = Auth::user();

    if (!Hash::check($request->current, $user->password)) {
      return response()->json(['errors' => ['current' => ['Current password does not match']]], 422);
    }

    $user->password = Hash::make($request->password);
    $user->save();

    return new UserWithProfileResource($user);
  }
}

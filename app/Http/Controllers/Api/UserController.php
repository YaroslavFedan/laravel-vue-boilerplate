<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  public function info(Request $request)
  {
    $user = User::with('security')->where(['id' => Auth::id()])->find(1);

    return response()->json($user, 200);
  }
}

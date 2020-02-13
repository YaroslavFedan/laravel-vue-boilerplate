<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class UserController extends Controller
{
  public function index()
  {
    $user = Auth::user();

    return response()->json($user, 200);
  }
}

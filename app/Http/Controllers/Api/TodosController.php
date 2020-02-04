<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Todo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTodoPost;


class TodosController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Todo::where('user_id', auth()->user()->id)->get();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(StoreTodoPost $request)
  {

    $request->validate([
      'title'=>'required|max:255'
    ]);

    $todo = Todo::create([
      'user_id' => Auth::user()->id,
      'title' => $request->title,
      'completed' => $request->completed
    ]);

    return response($todo, 201);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Todo  $todo
   * @return \Illuminate\Http\Response
   */
  public function update(StoreTodoPost $request, Todo $todo)
  {

    if (Auth::user()->id !== $todo->user_id) {
      return response()->json('Unauthorized', 401);
    }

    $request->validate([
      'title'=>'required|max:255'
    ]);

    $todo->update($request->all());

    return response($todo, 200);
  }


  /**
   * Update status completed for all todos
   *
   * @param Request $request
   * @return void
   */
  public function updateAll(Request $request)
  {
    $data = $request->validate([
      'completed' => 'required|boolean'
    ]);

    Todo::where('user_id', Auth::user()->id)->update($data);

    return response("Update success", 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Todo  $todo
   * @return \Illuminate\Http\Response
   */
  public function destroy(Todo $todo)
  {

    if (Auth::user()->id !== $todo->user_id) {
      return response()->json('Unauthorized', 401);
    }

    $todo->delete();

    return response("Delete success", 200);
  }


  /**
   * Destroy all complited todos
   *
   * @param Request $request
   * @return void
   */
  public function destroyCompleted(Request $request)
  {

    Auth::user()->todos()->where('completed', true)->delete();

    return response("Delete success", 200);
  }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChangePasswordRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'current' => ['required', 'string', 'between:6,25'],
      'password' => ['required', 'string', 'between:6,25', 'confirmed'],
      'password_confirmation' => ['required']
    ];
  }
}

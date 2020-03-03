<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserProfileRequest extends FormRequest
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
      'name' => 'required|max:50',
      'avatar' => 'max:255',
      'first_name' => 'max:50',
      'last_name' => 'max:50',
      'company' => 'max:100',
      'address' => 'max:255',
    ];
  }
}

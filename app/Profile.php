<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
  protected $fillable = [
    'first_name', 'last_name', 'company', 'address', 'avatar'
  ];

  protected $hidden = [
    'id', 'created_at', 'updated_at'
  ];

  public function user()
  {
    return $this->belongsTo('App\User');
  }
}

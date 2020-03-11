<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\PasswordSecurity
 *
 * @property int $id
 * @property int $user_id
 * @property int $google2fa_enable
 * @property string|null $google2fa_secret
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity whereGoogle2faEnable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity whereGoogle2faSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\PasswordSecurity whereUserId($value)
 * @mixin \Eloquent
 */
class PasswordSecurity extends Model
{

  protected $guarded = [];

  public function user(){

    return $this->belongsTo('App\User');
  }
}

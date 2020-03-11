<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\PasswordSecurity;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class SecurityController extends Controller
{

    /**
     * Initialize security data function
     *
     * @param Request $request
     * @return void
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        if (!$user->passwordSecurity) {
            $google2fa = app('pragmarx.google2fa');

            // Add the secret key to the registration data
            PasswordSecurity::create([
                'user_id' => $user->id,
                'google2fa_enable' => 0,
                'google2fa_secret' => $google2fa->generateSecretKey(),
            ]);

        }

        return response()->json($this->_getData($user), 201);
    }


    /**
     * Verify security code function
     *
     * @param Request $request
     * @return void
     */
    public function verify(Request $request)
    {
        $user = Auth::user();

        if ($this->_validate($request, $user)) {
            return response()->json($this->_getData($user), 200);
        }

        return $this->validationError();
    }

    /**
     * Toggle security verify function
     *
     * @param Request $request
     * @return void
     */
    public function toggle(Request $request)
    {

        $user = Auth::user();

        if ($this->_validate($request, $user)) {
            $user->passwordSecurity->google2fa_enable = ($user->passwordSecurity->google2fa_enable) ? 0 : 1;
            $user->passwordSecurity->save();

            return response()->json($this->_getData($user), 200);
        }

        return $this->validationError();
    }


    /**
     * Return google2fa data function
     *
     * @param [type] $user
     * @return void
     */
    private function _getData($user)
    {
        $user->refresh();
        return [
            'google2fa_enable' => $user->passwordSecurity->google2fa_enable,
            'google2fa_url' => $this->_getQrCode($user)
        ];
    }


    /**
     * Generate qrCode function
     *
     * @param [type] $user
     * @return void
     */
    private function _getQrCode($user)
    {
        $google2fa_url = "";
        if ($user->passwordSecurity()->exists()) {
            $google2fa = app('pragmarx.google2fa');

            $google2fa_url = $google2fa->getQRCodeInline(
                config('app.name'),
                $user->email,
                $user->passwordSecurity->google2fa_secret
            );
        }
        return $google2fa_url;
    }

    /**
     * Validate code function
     *
     * @param [type] $request
     * @param [type] $user
     * @return void
     */
    private function _validate($request, $user)
    {
        $data = $request->validate([
            'code' => 'required|min:6|max:6'
        ]);

        $google2fa = app('pragmarx.google2fa');
        return $google2fa->verifyKey($user->passwordSecurity->google2fa_secret, $data['code']);
    }

    /**
     * Return code error function
     *
     * @return void
     */
    public function validationError()
    {
        $error = [
            "errors" => [
                "code" => "Invalid Verification Code, Please try again."
            ]
        ];

        return response()->json($error, 422);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    /**
     * create an instance of the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function profile()
    {
        return view('profile.overview');
    }

    public function changePassword()
    {
        return view('profile.change-password');
    }
}

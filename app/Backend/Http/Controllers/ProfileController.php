<?php

namespace Backend\Http\Controllers;

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

    public function __invoke()
    {
        return view('backend.profile');
    }
}

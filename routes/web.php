<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require 'routes/auth.php';

Route::group(['middleware' => 'verified'], function () {
    // includeRouteFiles(__DIR__.'/backend/');
    require 'routes/dashboard.php';
    require 'routes/users.php';
    require 'routes/roles.php';
});

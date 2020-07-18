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

/*
 * Frontend Routes
 */
Route::group(['as' => 'frontend.'], function () {
    // includeRouteFiles(__DIR__.'/frontend/');
    require 'frontend/auth.php';
    require 'frontend/home.php';
    require 'frontend/account.php';
});

/*
 * Backend Routes
 */
Route::group(['prefix' => 'admin', 'as' => 'backend.', 'middleware' => ['access-backend', 'verified']], function () {
    // includeRouteFiles(__DIR__.'/backend/');
    require 'backend/dashboard.php';
    require 'backend/users.php';
    require 'backend/roles.php';
});

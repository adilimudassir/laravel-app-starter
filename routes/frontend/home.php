<?php

use Frontend\Http\Controllers\DashboardController;
use Frontend\Http\Controllers\HomeController;

Route::group(['middleware' => 'guest'], function () {
    Route::get('/', [HomeController::class, 'index'])->name('index');
});

Route::group(['middleware' => 'verified', 'auth'], function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

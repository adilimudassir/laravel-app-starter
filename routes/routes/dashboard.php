<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserPasswordController;

Route::get('/', DashboardController::class)->name('dashboard');
Route::get('/profile', [ProfileController::class, 'profile'])->name('profile');
Route::get('/change-password', [ProfileController::class, 'changePassword'])->name('change-password');

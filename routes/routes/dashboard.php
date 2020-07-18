<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserPasswordController;

Route::get('/', DashboardController::class)->name('dashboard');
Route::get('/profile', ProfileController::class)->name('profile');
Route::get('/change-password', [UserPasswordController::class, 'edit'])->name('change-password');
Route::post('/change-password', [UserPasswordController::class, 'update'])->name('change-password');

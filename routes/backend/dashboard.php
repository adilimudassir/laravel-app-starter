<?php

use Backend\Http\Controllers\DashboardController;
use Backend\Http\Controllers\ProfileController;
use Backend\Http\Controllers\UserPasswordController;

Route::get('/dashboard', DashboardController::class)->name('dashboard');
Route::get('/profile', ProfileController::class)->name('profile');
Route::get('/change-password', [UserPasswordController::class, 'edit'])->name('change-password');
Route::post('/change-password', [UserPasswordController::class, 'update'])->name('change-password');

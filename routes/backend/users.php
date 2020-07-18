<?php

use Backend\Http\Controllers\UserController;
use Backend\Http\Controllers\UserPasswordController;

Route::group(['prefix' => 'users', 'as' => 'users.', 'middleware' => 'impersonate.protect'], function () {
    Route::get('', [UserController::class, 'index'])->name('index');
    Route::get('/create', [UserController::class, 'create'])->name('create');
    Route::post('/store', [UserController::class, 'store'])->name('store');
    Route::get('/show/{id}', [UserController::class, 'show'])->name('show');
    Route::get('/edit/{id}', [UserController::class, 'edit'])->name('edit');
    Route::patch('/update/{id}', [UserController::class, 'update'])->name('update');
    Route::delete('/destroy/{id}', [UserController::class, 'destroy'])->name('delete');
    Route::get('/change-password/{id}', [UserPasswordController::class, 'edit'])->name('change-password');
    Route::post('/change-password/{id}', [UserPasswordController::class, 'update']);
});

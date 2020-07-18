<?php

use App\Http\Controllers\RoleController;

Route::group(['prefix' => 'roles', 'as' => 'roles.', 'middleware' => 'impersonate.protect'], function () {
    Route::get('', [RoleController::class, 'index'])->name('index');
    Route::get('/create', [RoleController::class, 'create'])->name('create');
    Route::post('/store', [RoleController::class, 'store'])->name('store');
    Route::get('/show/{id}', [RoleController::class, 'show'])->name('show');
    Route::get('/edit/{id}', [RoleController::class, 'edit'])->name('edit');
    Route::patch('/update/{id}', [RoleController::class, 'update'])->name('update');
    Route::delete('/destroy/{id}', [RoleController::class, 'destroy'])->name('delete');
});

<?php

use Frontend\Http\Controllers\ProfileController;

Route::get('/profile', ProfileController::class)->name('profile');

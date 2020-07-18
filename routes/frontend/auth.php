<?php

use Frontend\Http\Controllers\Auth\ConfirmPasswordController;
use Frontend\Http\Controllers\Auth\ForgotPasswordController;
use Frontend\Http\Controllers\Auth\LoginController;
use Frontend\Http\Controllers\Auth\RegisterController;
use Frontend\Http\Controllers\Auth\ResetPasswordController;
use Frontend\Http\Controllers\Auth\VerificationController;

Route::group(['as' => 'auth.', 'prefix' => 'auth'], function () {
    Route::middleware('auth')->group(function () {
        Route::middleware('verified')->group(function () {
            Route::post('logout', [LoginController::class, 'logout'])->name('logout');

            Route::get('password/confirm', [ConfirmPasswordController::class, 'showConfirmForm'])->name('password.confirm');
            Route::post('password/confirm', [ConfirmPasswordController::class, 'confirm']);
        });

        Route::get('email/verify', [VerificationController::class, 'show'])->name('verification.notice');
        Route::get('email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
        Route::post('email/resend', [VerificationController::class, 'resend'])->name('verification.resend');
    });

    Route::middleware('guest')->group(function () {
        Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
        Route::post('login', [LoginController::class, 'login']);

        Route::get('register', [RegisterController::class, 'showRegistrationForm'])->name('register');
        Route::post('register', [RegisterController::class, 'register']);

        Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
        Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
        Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
        Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.update');
    });
});

<?php

// Dashboard
Breadcrumbs::for('dashboard', function ($trail) {
    $trail->push('Dashboard', route('dashboard'));
});

// Dashboard > Profile
Breadcrumbs::for('profile', function ($trail) {
    $trail->parent('dashboard');
    $trail->push('Profile', route('profile'));
});

// Dashboard > Change Password
Breadcrumbs::for('change-password', function ($trail) {
    $trail->parent('dashboard');
    $trail->push('Change Password', route('change-password'));
});

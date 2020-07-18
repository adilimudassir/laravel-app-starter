<?php

// Dashboard
Breadcrumbs::for('backend.dashboard', function ($trail) {
    $trail->push('Dashboard', route('backend.dashboard'));
});

// Dashboard > Profile
Breadcrumbs::for('backend.profile', function ($trail) {
    $trail->parent('backend.dashboard');
    $trail->push('Profile', route('backend.profile'));
});

// Dashboard > Change Password
Breadcrumbs::for('backend.change-password', function ($trail) {
    $trail->parent('backend.dashboard');
    $trail->push('Change Password', route('backend.change-password'));
});

<?php

// Dashboard > Users > Index
Breadcrumbs::for('backend.users.index', function ($trail) {
    $trail->parent('backend.dashboard');
    $trail->push('Users', route('backend.users.index'));
});

// Dashboard > Users > Index > Show
Breadcrumbs::for('backend.users.show', function ($trail, $userID) {
    $trail->parent('backend.users.index');
    $trail->push('View User', route('backend.users.show', $userID));
});

// Dashboard > Users > Index > Create
Breadcrumbs::for('backend.users.create', function ($trail) {
    $trail->parent('backend.users.index');
    $trail->push('Create', route('backend.users.create'));
});

// Dashboard > Users > Index > Edit
Breadcrumbs::for('backend.users.edit', function ($trail, $userID) {
    $trail->parent('backend.users.index');
    $trail->push('Edit', route('backend.users.edit', $userID));
});

// Dashboard > Users > Index > Change Password
Breadcrumbs::for('backend.users.change-password', function ($trail, $userID) {
    $trail->parent('backend.users.index');
    $trail->push('Change Password', route('backend.users.change-password', $userID));
});

<?php

// Dashboard > Users > Index
Breadcrumbs::for('users.index', function ($trail) {
    $trail->parent('dashboard');
    $trail->push('Users', route('users.index'));
});

// Dashboard > Users > Index > Show
Breadcrumbs::for('users.show', function ($trail, $userID) {
    $trail->parent('users.index');
    $trail->push('View User', route('users.show', $userID));
});

// Dashboard > Users > Index > Create
Breadcrumbs::for('users.create', function ($trail) {
    $trail->parent('users.index');
    $trail->push('Create', route('users.create'));
});

// Dashboard > Users > Index > Edit
Breadcrumbs::for('users.edit', function ($trail, $userID) {
    $trail->parent('users.index');
    $trail->push('Edit', route('users.edit', $userID));
});

// Dashboard > Users > Index > Change Password
Breadcrumbs::for('users.change-password', function ($trail, $userID) {
    $trail->parent('users.index');
    $trail->push('Change Password', route('users.change-password', $userID));
});

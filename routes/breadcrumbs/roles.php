<?php

// Dashboard > Roles > Index
Breadcrumbs::for('roles.index', function ($trail) {
    $trail->parent('dashboard');
    $trail->push('Roles', route('roles.index'));
});

// Dashboard > Roles > Index > Show
Breadcrumbs::for('roles.show', function ($trail, $roleID) {
    $trail->parent('roles.index');
    $trail->push('View User', route('roles.show', $roleID));
});

// Dashboard > Roles > Index > Create
Breadcrumbs::for('roles.create', function ($trail) {
    $trail->parent('roles.index');
    $trail->push('Create', route('roles.create'));
});

// Dashboard > Roles > Index > Edit
Breadcrumbs::for('roles.edit', function ($trail, $roleID) {
    $trail->parent('roles.index');
    $trail->push('Edit', route('roles.edit', $roleID));
});

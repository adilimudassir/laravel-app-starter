<?php

// Dashboard > Roles > Index
Breadcrumbs::for('backend.roles.index', function ($trail) {
    $trail->parent('backend.dashboard');
    $trail->push('Roles', route('backend.roles.index'));
});

// Dashboard > Roles > Index > Show
Breadcrumbs::for('backend.roles.show', function ($trail, $roleID) {
    $trail->parent('backend.roles.index');
    $trail->push('View User', route('backend.roles.show', $roleID));
});

// Dashboard > Roles > Index > Create
Breadcrumbs::for('backend.roles.create', function ($trail) {
    $trail->parent('backend.roles.index');
    $trail->push('Create', route('backend.roles.create'));
});

// Dashboard > Roles > Index > Edit
Breadcrumbs::for('backend.roles.edit', function ($trail, $roleID) {
    $trail->parent('backend.roles.index');
    $trail->push('Edit', route('backend.roles.edit', $roleID));
});

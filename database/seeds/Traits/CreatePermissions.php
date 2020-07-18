<?php

use Domains\Auth\Models\Role;
use Spatie\Permission\Models\Permission;

trait CreatePermissions
{
    protected $permissions = [
        [
            '*' => [
                'access-backend',
            ],
            'users' => [
                'impersonate',
            ],
        ],
        'create',
        'read',
        'update',
        'delete',
    ];

    protected $entities = [
        'users',
        'roles',
    ];

    public function generatePermissions()
    {
        foreach ($this->entities as $entity) {
            foreach ($this->permissions as $permission) {
                is_array($permission) ?
                    $this->createPermissionsFromArray($permission, $entity) :
                    $this->createPermissionWithEntity($permission, $entity);
            }
        }
    }

    private function assignRoleToPermission($permission)
    {
        $role = Role::findByName(config('access.admin_role'));
        $role->givePermissionTo($permission);
    }

    private function createPermissionWithEntity($permission, $entity)
    {
        $this->assignRoleToPermission(Permission::firstOrCreate([
            'name' => $permission.'-'.$entity,
            'description' => ucwords(($permission.' '.$entity)),
        ]));
    }

    private function createPermissionWithoutEntity($permission)
    {
        $this->assignRoleToPermission(Permission::firstOrCreate([
            'name' => $permission,
            'description' => ucwords(str_replace('-', ' ', $permission)),
        ]));
    }

    private function createPermissionsFromArray($array, $entity)
    {
        foreach ($array as $key => $value) {
            if ($key == $entity) {
                foreach ($value as $permission) {
                    $this->createPermissionWithEntity($permission, $entity);
                }
            }
            if ($key !== $entity) {
                foreach ($value as $permission) {
                    $this->createPermissionWithoutEntity($permission);
                }
            }
        }
    }
}

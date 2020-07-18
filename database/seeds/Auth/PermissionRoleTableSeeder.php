<?php

use Domains\Auth\Models\Role;
use Illuminate\Database\Seeder;

class PermissionRoleTableSeeder extends Seeder
{
    use DisableForeignKeys, CreatePermissions;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Create Roles
        collect([
            config('access.admin_role'),
            config('access.default_role'),
        ])->each(function ($role) {
            Role::firstOrCreate(['name' => $role]);
        });

        $this->generatePermissions();

        $this->enableForeignKeys();
    }
}

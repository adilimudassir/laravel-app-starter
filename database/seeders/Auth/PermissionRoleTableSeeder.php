<?php

namespace Database\Seeders\Auth;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\CreatePermissions;
use Database\Seeders\Traits\DisableForeignKeys;

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

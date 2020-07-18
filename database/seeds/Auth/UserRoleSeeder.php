<?php

use Domains\Auth\Models\User;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->disableForeignKeys();

        optional(User::find(1))->assignRole(config('access.admin_role'));
        optional(User::find(2))->assignRole(config('access.default_role'));

        $this->enableForeignKeys();
    }
}

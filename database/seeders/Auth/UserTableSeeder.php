<?php
namespace Database\Seeders\Auth;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\Traits\DisableForeignKeys;

class UserTableSeeder extends Seeder
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

        // Add the master administrator, user id of 1
        User::create([
            'name' => 'John Doe',
            'email' => 'admin@admin.com',
            'password' => Hash::make('secret'),
            'email_verified_at' => now(),
            'active' => true,
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@user.com',
            'password' => Hash::make('secret'),
            'email_verified_at' => now(),
            'active' => true,
        ]);

        $this->enableForeignkeys();
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->newLine();
        $this->command->info('🚀 Starting the seeding process...');
        $this->command->newLine();
        $this->command->info('Creating admin user...');
        User::factory()->create([
            'email' => 'developer@ugs.ro',
            'password' => 'Password123..'
        ]);
        $this->command->newLine();
    }
}

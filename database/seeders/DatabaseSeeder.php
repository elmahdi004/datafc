<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       /*  $this->call([
            SettingSeeder::class,
        ]); */
        $users = [
            ["name" => "Ahmed Mustafa", "email" => "ahmed.mustafa@email.com", "password" => Hash::make("password1"), "is_admin" => 0],
            ["name" => "Sara Abdullah", "email" => "sara.abdullah@email.com", "password" => Hash::make("password2"), "is_admin" => 0],
            ["name" => "Hassan Khoury", "email" => "hassan.khoury@email.com", "password" => Hash::make("password3"), "is_admin" => 0],
            ["name" => "Fatima Hussein", "email" => "fatima.hussein@email.com", "password" => Hash::make("password4"), "is_admin" => 0],
            ["name" => "Omar Saleh", "email" => "omar.saleh@email.com", "password" => Hash::make("password5"), "is_admin" => 0],
            ["name" => "Layla Mahmoud", "email" => "layla.mahmoud@email.com", "password" => Hash::make("password6"), "is_admin" => 0],
            ["name" => "Mohammed Amin", "email" => "mohammed.amin@email.com", "password" => Hash::make("password7"), "is_admin" => 0],
            ["name" => "Aisha Hamza", "email" => "aisha.hamza@email.com", "password" => Hash::make("password8"), "is_admin" => 0],
            ["name" => "Yousef Mansour", "email" => "yousef.mansour@email.com", "password" => Hash::make("password9"), "is_admin" => 0],
            ["name" => "Nour Ali", "email" => "nour.ali@email.com", "password" => Hash::make("password10"), "is_admin" => 0],
        ];

        foreach ($users as $user) {
            \App\Models\User::factory()->create($user);
        }
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}

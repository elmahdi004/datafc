<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting;
class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
        ['key' => 'site_name', 'value' => 'Data Formation & Consulting'],
        ['key' => 'email', 'value' => 'datafc2019@gmail.com'],
        ['key' => 'tel', 'value' => '+212-675-343-730'],
        ['key' => 'fix', 'value' => '+212-524-624-584'],
        ['key' => 'description', 'value' => 'Description text'],
        ['key' => 'adresse', 'value' => 'Avenue de La Liberté, Immeuble Goumrizid 03 éme étage N° 13 Ville Nouvelle - Safi Maroc'],
        ['key' => 'ville', 'value' => 'Safi Maroc'],
        ['key' => 'google_map', 'value' => ''],
                    ];
    Setting::insert($settings);
    }
    
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class FormationCategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "id" => 1,
                "codeformation" => "DFC1",
                "titre" => "GRH et Management",
            ],
            [
                "id" => 2,
                "codeformation" => "DFC2",
                "titre" => "Formation",
            ],
            [
                "id" => 3,
                "codeformation" => "DFC3",
                "titre" => "Qualité-Santé-,Sécurité-Environnement(QSSE)",
            ],
            [
                "id" => 4,
                "codeformation" => "DFC4",
                "titre" => "Formation en finance comptabilité et assurance",
            ],
            [
                "id" => 5,
                "codeformation" => "DFC5",
                "titre" => "Communication",
            ],
        ];

        \App\Models\FormationCategorie::insert($data);
    }
}

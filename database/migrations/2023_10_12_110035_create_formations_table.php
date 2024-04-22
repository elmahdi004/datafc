<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string("Code")->unique();
            $table->string('Titre');
            $table->string('Objectifs');
            $table->string('Population_cible');
            $table->string('Duree');
            $table->boolean('block')->default(0);
            $table->foreignId('formation_categories_id')->constrained('formation_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formations');
    }
};

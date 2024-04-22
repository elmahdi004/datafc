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
        Schema::create('pers_morales', function (Blueprint $table) {
            $table->id();
            $table->string("entreprise");
            $table->string("raisons");
            $table->string("resplonsable");
            $table->string("telres");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pers_morales');
    }
};

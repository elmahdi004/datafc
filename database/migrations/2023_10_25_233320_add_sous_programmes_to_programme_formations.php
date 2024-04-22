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
        Schema::table('programme_formations', function (Blueprint $table) {
            $table->json('sous_programmes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('programme_formations', function (Blueprint $table) {
            $table->dropColumn('sous_programmes');
        });
    }
};

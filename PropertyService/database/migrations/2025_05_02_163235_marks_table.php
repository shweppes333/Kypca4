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
        Schema::create('marks', function (Blueprint $table) {
            $table->id();
            $table->string('policy_pets')->nullable();
            $table->string('policy_children')->nullable();
            $table->string('policy_period')->nullable();
            $table->string('policy_increase_price')->nullable();
            $table->string('policy_deposits')->nullable();
            $table->string('policy_repair')->nullable();
            $table->integer('policy_tenant_verification')->nullable();
            $table->string('policy_payment')->nullable();
            $table->string('policy_return_deposits')->nullable();
            $table->string('policy_safety')->nullable();
            // $table->unsignedBigInteger('property_id'); 
            // $table->foreign('property_id')->references('id')->on('properties')
            //     ->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('marks', function (Blueprint $table) {
            $table->dropForeign(['property_id']); // Удаляем внешний ключ
        });

        Schema::dropIfExists('marks'); // Удаляем таблицу
    }
};

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
        Schema::create('property_infos', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->integer('bathrooms');
            $table->integer('bedrooms');
            $table->string('category');
            $table->integer('owner');
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
        //
    }
};

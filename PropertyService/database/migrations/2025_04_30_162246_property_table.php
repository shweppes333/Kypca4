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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->integer('price');
            $table->string('location');
            $table->unsignedBigInteger('image_id');
            $table->foreign('image_id')->references('id')->on('images')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('property_info_class');
            $table->foreign('property_info_class')->references('id')->on('property_infos')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('mark_id');
            $table->foreign('mark_id')->references('id')->on('marks')
            ->onDelete('cascade')->onUpdate('cascade');
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

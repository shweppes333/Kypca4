<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->decimal('price', 12, 2);
            $table->string('location')->nullable();
            $table->string('property_type')->nullable();
            $table->date('date_added');
        });
        
    }
    public function down()
    {
        
        Schema::dropIfExists('properties');
    }
};

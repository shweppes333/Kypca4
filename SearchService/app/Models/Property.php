<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title',
        'description',
        'price',
        'location',
        'property_type',
        'date_added',
    ];
    protected $dates = ['date_added'];
    public $timestamps = false;
}

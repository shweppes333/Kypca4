<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/** 
 * @property int $id
 * @property string $title
 * @property string $description
 * @property int $price
 * @property string $location
 * @property Collection $image_url
 * @property Collection $mark
 * @property Collection $property_info
 * */
class Property extends Model
{
    /** @use HasFactory<\Database\Factories\PropertyFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'location',
        'image_id',
        'property_info_class',
        'mark_id'
    ];

    public function image()
    {
        return $this->belongsTo(Image::class, 'id', 'image_id',);
    }


    public function propertyInfo()
    {
        return $this->belongsTo(PropertyInfo::class, 'id', 'property_info_class',);
    }

    public function mark()
    {
        return $this->belongsTo(Mark::class, 'id',  'mark_id');
    }
}

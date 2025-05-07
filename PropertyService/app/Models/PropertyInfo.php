<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $type
 * @property int $bathrooms
 * @property int $bedrooms
 * @property string $category
 * @property int $owner
 */
class PropertyInfo extends Model
{
    /** @use HasFactory<\Database\Factories\PropertyInfoFactory> */
    use HasFactory;

    protected $fillable = [
        'type',
        'bathrooms',
        'bedrooms',
        'category',
        'owner',
        // 'property_id',
    ];

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $policy_pets
 * @property string $policy_children
 * @property string $policy_period
 * @property string $policy_increase_price
 * @property string $policy_deposits
 * @property string $policy_repair
 * @property int $policy_tenant_verification
 * @property string $policy_payment
 * @property string $policy_return_deposits
 * @property string $policy_safety
 */
class Mark extends Model
{
    /** @use HasFactory<\Database\Factories\MarkFactory> */
    use HasFactory;

    protected $fillable = [
        'policy_pets',
        'policy_children',
        'policy_period',
        'policy_increase_price',
        'policy_deposits',
        'policy_repair',
        'policy_tenant_verification',
        'policy_payment',
        'policy_return_deposits',
        'policy_safety',
        // 'property_id',
    ];

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }
}

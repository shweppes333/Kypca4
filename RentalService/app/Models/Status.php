<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use function PHPUnit\Framework\returnArgument;


/**
 * @history int $id
*/

class Status extends Model {
    /** @use HasFactory<\Database\Factories\StatusFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'Name',
        'Description',
    ];

    public function status(): BelongsTo {
        return $this->belongsTo( Rental::class);
    }
}
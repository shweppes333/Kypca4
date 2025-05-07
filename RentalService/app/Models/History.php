<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use function PHPUnit\Framework\returnArgument;


/**
 * @history int $id
*/

class History extends Model {
    /** @use HasFactory<\Database\Factories\HistoryFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'Id_User',
        'Rental_Id'
    ];

    public function Rental(): BelongsTo {
        return $this->belongsTo( Rental::class);
    }
}
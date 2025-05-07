<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use function PHPUnit\Framework\returnArgument;


/**
 * @history int $id
*/

class Rental extends Model {
    /** @use HasFactory<\Database\Factories\RentalFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'Rental_Code',
        'Id_User',
        'Id_Property',
        'Status_Id',
    ];

    public function history(): BelongsTo {
        return $this->belongsTo( Status::class);
    }

    public function status() {
        return $this->belongsTo(Status::class, 'Status_Id');
    }
}
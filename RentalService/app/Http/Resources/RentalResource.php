<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RentalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'Rental_Code' => $this->Rental_Code,
            'Id_User' => $this->Id_User,
            'Id_Property' => $this->Id_Property,
            'Status_Id' => $this->Status_Id,
            'status' => new StatusResource($this->status), 
        ];
    }
}

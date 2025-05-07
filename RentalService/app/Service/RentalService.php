<?php

namespace App\Service;

use App\Http\Resources\RentalResource;
use App\Models\Rental;
use GuzzleHttp\Psr7\Request;


class RentalService 
{

  public function getRentalsByUserId($userId)
  {
      $rentals =  Rental::where('Id_User', $userId)
          ->with('status')
          ->get();
          return RentalResource::collection($rentals);
  }
public function CreateRental(Request $request) {

}

}
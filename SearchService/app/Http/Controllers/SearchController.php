<?php

namespace App\Http\Controllers;
use App\Services\PropertyService;

use Illuminate\Http\Request;

class SearchController extends Controller
{
   
    public function search(Request $request)
    {
        $filters = $request->only([
            'price_min',
            'price_max',
            'location',
            'property_type',
            'date_added_min',
            'date_added_max',
        ]);
        $searchTerm = $request->input('searchTerm');
        $sortField = $request->input('sortField');
        $sortDirection = $request->input('sortDirection', 'asc');

        $searchService = new PropertyService($filters, $searchTerm, $sortField, $sortDirection);
        $results = $searchService->search();
        return response()->json($results);
    }
}
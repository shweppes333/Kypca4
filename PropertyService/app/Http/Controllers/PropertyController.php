<?php

namespace App\Http\Controllers;
use App\Http\Requests\Favorite\DestroyRequest;
use App\Http\Requests\PropertyInfoRequest;
use App\Http\Requests\PropertyRequest;
use App\Http\Requests\ImageRequest;
use App\Http\Requests\MarkRequest;
use App\Models\Property;
use App\Models\PropertyInfo;
use App\Models\Mark;
use App\Models\Image;


use Illuminate\Http\Request;

class PropertyController extends Controller
{
    
    public function index() {
        $properties = Property::all();

        return response()->json([$properties]);
    }

    public function destroy($id, DestroyRequest $request)
    {
        $property = Property::find($id);

        if (!$property) {
            return response()->json(['message' => 'Не найдено'], 404);
        }

        $property->delete();

        return response()->json(['message' => 'Удалено']);
    }

    public function show($id) {
        $property = Property::find($id);

        return response()->json([$property]);
    }

    

    public function store(PropertyRequest $request, PropertyInfoRequest $propertyInfoRequest, ImageRequest $imageRequest, MarkRequest $markRequest) {
        $data = $request->validated();
        $info = $propertyInfoRequest->validated();
        $imagee = $imageRequest->validated();
        $markk = $markRequest->validated();

        $image = Image::create([
            'filename' => $imagee['image'],
            'path'=> $imagee['image'],
        ]);

        $mark = Mark::create([
            'policy_pets'=> $markk['Example'],
            'policy_children'=> $markk['Example'],
            'policy_perion'=> $markk['Example'],
            'policy_increase_price'=> $markk['Example'],
            'policy_deposits'=> $markk['Example'],
            'policy_repair'=> $markk['Example'],
            'policy_tenant_verification'=> $markk[23],
            'policy_payment'=> $markk['Example'],
            'policy_return_deposits'=> $markk['Example'],
            'policy_safety'=> $markk['Example'],
        ]);

        $propertyinfo = PropertyInfo::create([
            'type'=> $info['Info'],
            'bathrooms'=> $info['Info'],
            'bedrooms'=> $info['Info'],
            'category'=> $info['Info'],
            'owner'=> $info[1],
        ]);

        $property = Property::create([
            'title'=> $data['title'],
            'description'=> $data['description'],
            'price'=> $data['price'],
            'location'=> $data['location'],
            'image_id' => $image->id,
            'property_info_class'=> $propertyinfo->id,
            'mark_id'=> $mark->id,
        ]);

        return response()->json($property);
    }
}

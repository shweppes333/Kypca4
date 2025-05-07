<?php

namespace Database\Seeders;

use App\Models\Property;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    
        public function run()
        {
            Property::insert([
                [
                    'title' => 'Современная квартира в центре Москвы',
                    'description' => 'Просторная 3-комнатная квартира с ремонтом, рядом с метро.',
                    'price' => 12000000.00,
                    'location' => 'Москва',
                    'property_type' => 'квартира',
                    'date_added' => '2024-05-15',
                ],
                [
                    'title' => 'Уютный дом под Санкт-Петербургом',
                    'description' => 'Небольшой загородный дом с большим участком и садом.',
                    'price' => 8500000.00,
                    'location' => 'Санкт-Петербург',
                    'property_type' => 'дом',
                    'date_added' => '2024-04-28',
                ],
                [
                    'title' => 'Студия в Новосибирске',
                    'description' => 'Недорогая студия для сдачи в аренду или проживания.',
                    'price' => 2300000.00,
                    'location' => 'Новосибирск',
                    'property_type' => 'квартира',
                    'date_added' => '2024-03-10',
                ],
                [
                    'title' => 'Коммерческое помещение в центре Екатеринбурга',
                    'description' => 'Помещение под магазин или офис в деловом районе.',
                'price' => 17500000.00,
                'location' => 'Екатеринбург',
                'property_type' => 'коммерческая недвижимость',
                'date_added' => '2024-05-01',
            ],
            [
                'title' => 'Коттедж на берегу озера в Ленинградской области',
                'description' => 'Большой коттедж с видом на озеро, идеально для отдыха.',
                'price' => 19000000.00,
                'location' => 'Ленинградская область',
                'property_type' => 'дом',
                'date_added' => '2024-05-20',
            ],
        ]);
    }
    
}

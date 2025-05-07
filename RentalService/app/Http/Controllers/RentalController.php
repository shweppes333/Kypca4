<?php

namespace App\Http\Controllers;
use App\Http\Requests\RentalRequest;
use App\Service\RentalService;
use Illuminate\Http\Requests;
use App\Models\Rental;
use App\Models\Status;
use Illuminate\Support\Facades\DB;

class RentalController extends Controller
{
    protected $rentalService;
    protected $stat;

    public function __construct(RentalService $rentalService, Status $stat) {
        $this->rentalService = $rentalService;
        $this->stat = $stat;
    }

    public function index($user_ID) {
       $rentals = $this->rentalService->getRentalsByUserId($user_ID);
       return response()->json($rentals);
    }

    public function store(RentalRequest $request) {

        $data = $request->validated();

        $status = Status::create([
            'Name' => 'Default Status', // можно заменить на нужные значения или получить из $data
            'Description' => 'Automatically created status',
        ]);
        if (!$status) {
            return response()->json(['error' => 'Failed to create status'], 500);
        }

        $rental = Rental::create([
            'Rental_Code' => $data['Rental_Code'],
            'Id_User' => $data['Id_User'],
            'Id_Property' => $data['Id_Property'],
            'Status_Id' => $status->id, 
        ]);
        if (!$rental) {
            return response()->json(['error' => 'Failed to create rental'], 500);
        }

        return response()->json($rental, 201);
    }

    public function destroy() {
        // Отключаем проверку внешних ключей
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        // Получаем список всех таблиц текущей базы данных
        $tables = DB::select('SHOW TABLES');
        // Имя ключа с именем таблиц возвращаемый SHOW TABLES зависит от драйвера, получим его динамически
        $dbName = env('DB_DATABASE');
        $key = "Tables_in_{$dbName}";
        foreach ($tables as $table) {
            $tableName = $table->$key;
            // Пропускаем миграционные таблицы, если не хотим их чистить, например 'migrations'
            if ($tableName === 'migrations') {
                continue;
            }
            // Очищаем таблицу
            DB::table($tableName)->truncate();
        }
        // Включаем проверку внешних ключей обратно
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        return response()->json(['message' => 'Все таблицы очищены'], 200);
    }
}

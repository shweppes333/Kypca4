<?php
namespace App\Services;
use App\Models\Property;
use Illuminate\Database\Eloquent\Builder;
class PropertyService
{
    protected Builder $query;
    protected array $filters;
    protected ?string $searchTerm;
    protected ?string $sortField;
    protected string $sortDirection;
    public function __construct(array $filters = [], ?string $searchTerm = null, ?string $sortField = null, string $sortDirection = 'asc')
    {
        $this->query = Property::query();
        $this->filters = $filters;
        $this->searchTerm = $searchTerm;
        $this->sortField = $sortField;
        $this->sortDirection = strtolower($sortDirection) === 'desc' ? 'desc' : 'asc';
    }
    public function search()
    {
        
        if (!empty($this->filters)) {
            foreach ($this->filters as $field => $value) {
                if ($value === null || $value === '') {
                    continue;
                }
                switch ($field) {
                    case 'price_min':
                        $this->query->where('price', '>=', $value);
                        break;
                    case 'price_max':
                        $this->query->where('price', '<=', $value);
                        break;
                    case 'location':
                        $this->query->where('location', 'ilike', "%$value%");
                        break;
                    case 'property_type':
                        $this->query->where('property_type', $value);
                    case 'date_added_min':
                        $this->query->where('date_added', '>=', $value);
                        break;
                    case 'date_added_max':
                        $this->query->where('date_added', '<=', $value);
                        break;
                    default:
                        
                        break;
                }
            }
        }
       
        if ($this->searchTerm) {
            $tsQuery = str_replace(' ', ' & ', $this->searchTerm);
            
            $this->query->whereRaw(
                "to_tsvector('russian', coalesce(title,'') || ' ' || coalesce(description,'')) @@ to_tsquery('russian', ?)",
                [$tsQuery]
            );
        }
      
        if ($this->sortField && in_array($this->sortField, ['price', 'date_added'])) {
            $this->query->orderBy($this->sortField, $this->sortDirection);
        } else {
            $this->query->orderBy('price', 'asc');
        }
        return $this->query->get();
    }
}

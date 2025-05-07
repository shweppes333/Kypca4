<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MarkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'policy_pets'=> 'required|string',
            'policy_children'=> 'required|string',
            'policy_perion'=> 'required|string',
            'policy_increase_price'=> 'required|string',
            'policy_deposits'=> 'required|string',
            'policy_repair'=> 'required|string',
            'policy_tenant_verification'=> 'required|integer',
            'policy_payment'=> 'required|string',
            'policy_return_deposits'=> 'required|string',
            'policy_safety'=> 'required|string',
        ];
    }
}

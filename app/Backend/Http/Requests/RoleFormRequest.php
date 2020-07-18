<?php

namespace Backend\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class RoleFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (request()->name === config('access.admin_role')) {
            return false;
        }

        return auth()->user()->can('create-roles');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = [
            'name' => 'required|string|unique:roles',
        ];

        if (Request::METHOD_PATCH) {
            $data['name'] = 'required|string';
        }

        return $data;
    }
}

<?php

namespace Frontend\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use LangleyFoxall\LaravelNISTPasswordRules\PasswordRules;

class UserFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return config('acces.enable_registration');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
        ];

        if (Request::METHOD_POST) {
            $data['password'] = PasswordRules::register(request()->email);
            $data['email'] = 'required|email';
        }

        if (Request::METHOD_PATCH) {
            $data['email'] = 'required|email';
            $data['password'] = '';
        }

        return $data;
    }
}

<?php

namespace App\Http\Requests;

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

        // if (Request::METHOD_PATCH && filled(request()->password)) {
        //     $data['password'] = PasswordRules::changePassword(request()->email);
        // }

        return $data;
    }
}

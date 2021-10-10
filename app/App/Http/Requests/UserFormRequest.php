<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Foundation\Http\FormRequest;
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
        return auth()->user()->can('create-users');
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
            'roles' => 'required',
            'password' => 'required|confirmed'
        ];

        if (Request::isMethod('POST')) {
        }

        if (Request::isMethod('PATCH')) {
            $data['email'] = 'required|email';
            $data['phone'] = 'required|digits:11';
            $data['password'] = '';
        }

        return $data;
    }
}

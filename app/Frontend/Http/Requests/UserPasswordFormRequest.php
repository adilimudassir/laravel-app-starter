<?php

namespace Frontend\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserPasswordFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to do this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (request()->user()->isSuperAdmin()) {
            return true;
        }

        if (request()->id === auth()->user()->id) {
            return true;
        }

        return false;
    }

    public function rules()
    {
        return [
            'password' => 'confirmed',
        ];
    }
}

{{ html()->label(ucfirst($name))
    ->class('form-control-label')
    ->for($name)
}}
{{ html()->text($name)
    ->class('form-control')
    ->classIf($errors->has($name), 'is-invalid')
}}
@error($name)
    {{ html()->span()->text($message)
        ->class('invalid-feedback font-weight-bold')
        ->attribute('role', 'alert')
    }}
@enderror
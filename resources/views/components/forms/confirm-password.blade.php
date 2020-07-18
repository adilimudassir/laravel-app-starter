{{ html()->label('Confirm Password')
    ->class('form-control-label')
    ->for('password_confirmation')
}}
{{ html()->password('password_confirmation')
    ->class('form-control')
}}
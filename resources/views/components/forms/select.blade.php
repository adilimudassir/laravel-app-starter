{{ html()->label(ucfirst($name))
    ->class('form-control-label')
    ->for($name)
}}
{{ html()->select($name, $options, isset($model) ? $model->$name : null)
    ->class('form-control')
    ->placeholder("Select {$name}")
}}
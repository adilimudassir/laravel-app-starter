@props([
    'multiple' => false,
    'name' => '',
    'labelName' => '',
    'value' => '',
    'checked' => false,
    'id' => ''
])

@php
    $labelID = 'label_'.$name.'_'.$id;
    $inputID = $name.'_'.$id;
@endphp

<!-- if not multiple checkboxes, Display a label -->
@if(!$multiple)
    {{
        html()->label(ucfirst($name))->class('control-label text-lg-right pt-2')
    }}
@endif

{{
    html()->div()
        ->class('checkbox-custom checkbox-secondary')
        ->children([
            html()
                ->checkbox($multiple ? $name.'[]' : $name)
                ->id($inputID)
                ->checked($checked)
                ->value($value),

            html()
                ->label($labelName)
                ->for($inputID)
                ->id($labelID)
        ])
}}

<script>
    const {{ $labelID }} = document.querySelector("#{{ $labelID }}");

    document.querySelector("#{{ $inputID }}").addEventListener('click', (e) => {
        switch ({{ $labelID }}.innerText) {
            case 'True':
                {{ $labelID }}.innerText = 'False'
                break;
            case 'False':
                {{ $labelID }}.innerText = 'True'
                break;
            case 'Yes':
                {{ $labelID }}.innerText = 'No'
                break;
            case 'No':
                {{ $labelID }}.innerText = 'Yes'
                break;
            case 'Active':
                {{ $labelID }}.innerText = 'Inactive'
                break;
            case 'Inactive':
                {{ $labelID }}.innerText = 'Active'
                break;
            default:
                break;
        }
    });
</script>
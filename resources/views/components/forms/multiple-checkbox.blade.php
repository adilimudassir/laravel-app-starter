@props([
    'options' => [],
    'name' => '',
    'value' => '',
    'modelValues' => collect([])
])

{{
    html()->label(ucfirst($name))->class('control-label text-lg-right pt-2')
}}
<small class="text-info">(Select all that apply)</small>

@foreach($options as $id => $value)
    <x-forms.checkbox 
        :id="$id"
        :name="$name"
        :checked="$modelValues->contains($value) ? true : false"
        :value="ucfirst($id)"
        :labelName="ucfirst($value)" 
        multiple="true" 
    />
@endforeach
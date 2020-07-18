@props([
    'id' => '',
    'active' => false
])

<div id="{{ $id }}" class="tab-pane {{ $active ? 'active' : '' }}">
    {{ $slot }}
</div>
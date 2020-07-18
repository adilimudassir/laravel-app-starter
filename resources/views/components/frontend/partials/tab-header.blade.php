@props([
    'id' => '',
    'active' => false
])

<li class="nav-item {{ $active ? 'active' : '' }}">
    <a class="nav-link" href="#{{ $id }}" data-toggle="tab">{{ $slot }}</a>
</li>
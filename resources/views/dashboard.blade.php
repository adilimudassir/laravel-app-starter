<x-layouts.app>
    <x-slot name="title">
        Dashboard
    </x-slot>
    Welcome to Admin panel, {{ auth()->user()->name }}
</x-layouts.app>
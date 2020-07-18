<x-frontend.layouts.app>
    <x-slot name="title">
        Dashboard
    </x-slot>    
    <h1 class="text-center">Welcome, {{ auth()->user()->name }}</h1>
</x-frontend.layouts.app>
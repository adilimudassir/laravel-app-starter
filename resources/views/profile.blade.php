<x-layouts.app>
    <x-slot name="title">
        Profile
    </x-slot>
    @include('partials._user-details', ['user' => auth()->user()])

</x-layouts.app>
<x-backend.layouts.app>
    <x-slot name="title">
        Profile
    </x-slot>
    @include('backend.partials._user-details', ['user' => auth()->user()])

</x-backend.layouts.app>
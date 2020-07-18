<x-frontend.layouts.app>
    <x-slot name="title">
        Dashboard
    </x-slot>
    @include('frontend.partials._user-details', ['user' => auth()->user()])
</x-frontend.layouts.app>
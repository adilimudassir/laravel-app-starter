<x-layouts.app :title="$title">
    <x-slot name="styles">
        {{ $before_styles ?? null }}
        <link href="{{ mix('css/frontend.css') }}" rel="stylesheet">
        {{ $after_styles ?? null }}
    </x-slot>
    <x-frontend.partials.navbar />
    @auth
        {{-- Breadcrumbs::render()  --}}
    @endauth
    <main class="py-4">
        @include('partials.messages')
        @include('partials.impersonate')
        {{ $slot }}
    </main>    
    <x-frontend.partials.footer />
    <x-slot name="scripts">
        {{ $before_scripts ?? null }}
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/frontend.js') }}"></script>
        {{ $after_scripts ?? null }}
    </x-slot>
</x-layouts.app>
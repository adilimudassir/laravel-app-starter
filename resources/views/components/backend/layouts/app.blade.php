<x-layouts.app :title="$title">
    <x-slot name="styles">
        {{ $before_styles ?? null }}
        <link href="{{ mix('css/backend.css') }}" rel="stylesheet">
        {{ $after_styles ?? null }}
    </x-slot>
    <section class="body">
        <x-backend.partials.header />
        <div class="inner-wrapper">
            <x-backend.partials.left-sidebar />
            <main role="main" class="content-body">
                <header class="page-header">
                    <h2>{{ $title }}</h2>
                    <div class="right-wrapper text-right">
                        {{ Breadcrumbs::render() }}
                        <a class="sidebar-right-toggle" data-open="sidebar-right"><i class="fas fa-chevron-left"></i></a>
                    </div>
                </header>
                @include('partials.messages')
                @include('partials.impersonate')
                {{ $slot }}
            </main>
        </div>
        <x-backend.partials.right-sidebar />
    </section>
    <x-slot name="scripts">
        {{ $before_scripts ?? null }}
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/backend.js') }}"></script>
        {{ $after_scripts ?? null }}
    </x-slot>
</x-layouts.app>
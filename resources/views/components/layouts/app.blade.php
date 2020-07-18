@props(['title'])
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel Starter') }} - {{ $title }}</title>
    <!-- Styles -->
    {{ $before_styles ?? null }}
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    {{ $after_styles ?? null }}
    <script src="{{ asset('vendor/modernizr-custom.js') }}"></script>
    <livewire:styles>
</head>

<body>
    <div id="app">
        <section class="body">
            <x-partials.header />
            <div class="inner-wrapper">
                <x-partials.left-sidebar />
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
            <x-partials.right-sidebar />
        </section>
    </div>
    {{ $before_scripts ?? null }}
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    {{ $after_scripts ?? null }}
    <livewire:scripts>
</body>

</html>
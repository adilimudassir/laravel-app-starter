@props(['title', 'styles', 'scripts'])
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel Starter') }} - {{ $title }}</title>
    <!-- Styles -->
    {{ $styles }}
    <script src="{{ asset('vendor/modernizr-custom.js') }}"></script>
    <livewire:styles>
</head>
<body>
    <div id="app">
        {{ $slot }}
    </div>
    {{ $scripts }}
    <livewire:scripts>
</body>
</html>

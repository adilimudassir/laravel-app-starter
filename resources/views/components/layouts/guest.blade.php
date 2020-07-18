@props(['title'])
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="fixed">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel Starter') }} - {{ $title }}</title>
    <!-- Styles -->
    {{ $before_styles ?? null }}
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    {{ $after_styles ?? null }}
    <script src="{{ asset('vendor/modernizr-custom.js') }}"></script>
</head>

<body>
    <section class="body-sign">
        <div class="center-sign">
            {{ $slot }}
            <p class="text-center text-muted mt-3 mb-3">&copy; Copyright {{ date('Y') }}. All Rights Reserved.</p>
        </div>
    </section>
    {{ $before_scripts ?? null }}
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    {{ $after_scripts ?? null }}
</body>

</html>
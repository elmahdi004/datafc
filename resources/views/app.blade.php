<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ \App\Models\Setting::getSetting('site_name', 'Laravel') }}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="logo" content="{{ \App\Models\Setting::getSetting('logo', 'default-logo.png') }}">
    <meta name="facebook" content="{{ \App\Models\Setting::getSetting('link_facebook', '#') }}">
    <meta name="instagram " content="{{ \App\Models\Setting::getSetting('link_linkedIn ', '#') }}">
    <meta name="linkedIn " content="{{ \App\Models\Setting::getSetting('link_instagram ', '#') }}">
    <meta name="telephone" content="{{ \App\Models\Setting::getSetting('tel', '+212-675-343-730') }}">
    <meta name="address" content="{{ \App\Models\Setting::getSetting('ville', 'Safi maroc') }}">
    <meta name="localization" content="{{ \App\Models\Setting::getSetting('localization', 'fr-MA') }}">
    <meta name="description" content="{{ \App\Models\Setting::getSetting('description', 'Data fc') }}">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>
<p class="text-base mb-2 mx-auto text-body-color text-center p-3">
Data FC © 2024
</p>
</html>

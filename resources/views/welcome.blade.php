<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ryu Devs</title>

    <link rel="icon" type="image/png" href="/Logos/ryu.png" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- WAJIB: @viteReactRefresh HARUS di atas @vite --}}
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/Components/App.tsx'])
</head>
<body class="bg-gray-100 antialiased">

    <div id="app"></div>

</body>
</html>
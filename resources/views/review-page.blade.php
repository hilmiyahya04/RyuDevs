<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Give a Review - Ryu Devs</title>

    <link rel="icon" type="image/png" href="/Logos/ryu.png" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/Components/ReviewPage.tsx'])
</head>
<body class="bg-gray-100 antialiased">

    <div id="review-app"></div>

</body>
</html>
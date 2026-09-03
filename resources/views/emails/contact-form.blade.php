<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Terima Kasih</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6;">
    <h2>Halo, {{ $name }}!</h2>
    <p>Terima kasih sudah menghubungi kami. Berikut salinan pesan yang Anda kirim:</p>
    <p><strong>Subjek:</strong> {{ $subjectText ?: '-' }}</p>
    <p><strong>Pesan:</strong></p>
    <p>{{ $messageText }}</p>
    <p>Kami akan segera merespons pesan Anda.</p>
</body>
</html>
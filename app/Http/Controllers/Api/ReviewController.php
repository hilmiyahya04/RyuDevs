<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
// use App\Models\Review; // Uncomment jika menggunakan database

class ReviewController extends Controller
{
    public function index()
    {
        // Contoh data dummy ulasan (bisa diganti dengan Review::all() dari database)
        $reviews = [
            [
                'id' => 1,
                'name' => 'Budi Santoso',
                'comment' => 'Aplikasinya sangat membantu dan mudah digunakan!',
                'rating' => 5,
            ],
            [
                'id' => 2,
                'name' => 'Siti Aminah',
                'comment' => 'Fitur-fiturnya lengkap, pertahankan!',
                'rating' => 4,
            ],
            [
                'id' => 3,
                'name' => 'Joko Widodo',
                'comment' => 'Proses navigasinya cepat karena pakai Inertia.',
                'rating' => 5,
            ],
        ];

        return Inertia::render('Reviews', [
            'title' => 'Ulasan Pelanggan',
            'reviews' => $reviews,
        ]);
    }
}
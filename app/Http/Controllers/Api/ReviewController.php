<?php
// app/Http/Controllers/Api/ReviewController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ReviewTokens;
use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'review' => 'required|string',
            'email' => 'required|email',
            'token' => 'required|string',
        ]);

        $token = ReviewTokens::where('token', $validated['token'])
            ->where('is_used', false)
            ->first();

        if (! $token) {
            return response()->json([
                'message' => 'Token tidak valid atau sudah digunakan.',
            ], 422);
        }

        $review = Reviews::create([
            'customer_name' => $validated['customer_name'],
            'position' => $validated['position'] ?? null,
            'review' => $validated['review'],
            'email' => $validated['email'],
            'token' => $validated['token'],
            'status' => 'pending',
        ]);

        $token->update(['is_used' => true]);

        return response()->json([
            'message' => 'Review berhasil dikirim, menunggu persetujuan admin.',
            'data' => $review,
        ], 201);
    }

    public function index()
    {
        $reviews = Reviews::approved()->latest()->get();

        return response()->json($reviews);
    }
}
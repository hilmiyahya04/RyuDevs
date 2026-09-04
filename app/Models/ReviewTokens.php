<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewTokens extends Model
{
    use HasFactory;

    protected $table = 'review_tokens';

    protected $fillable = [
        'token',
        'is_used',
    ];

    protected $casts = [
        'is_used' => 'boolean',
    ];
}
<?php
// app/Models/Reviews.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    use HasFactory;

    protected $table = 'reviews';

    protected $fillable = [
        'customer_name',
        'position',
        'review',
        'email',
        'token',
        'status',
    ];

    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }
}
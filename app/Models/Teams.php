<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    use HasFactory;
    protected $table = 'teams';
    protected $fillable = [
        'name',
        'position',
        'photo',
        'bio',
        'email',
        'linkedin_url',
        'github_url',
        'instagram_url',
        'telegram',
        'portfolio_url',
        'is_active',
    ];
}

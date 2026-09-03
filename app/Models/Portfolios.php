<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolios extends Model
{
    use HasFactory;
    protected $table = 'portfolios';
    protected $fillable = [
        'title',
        'slug',
        'description',
        'thumbnail',
        'project_url',
        'github_url',
        'category',
        'is_featured',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

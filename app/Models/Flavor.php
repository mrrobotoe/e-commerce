<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flavor extends Model
{
    /** @use HasFactory<\Database\Factories\FlavorFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'category',
        'slug',
    ];
}

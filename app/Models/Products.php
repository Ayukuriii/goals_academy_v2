<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    // protected $appends = [
    //     'productType'
    // ];

    protected $fillable = [
        'name',
        'slug',
        'excerpt',
        'description',
        'features',
        'price',
        'date_start',
        'date_end',
        'product_image',
        'is_visible',
        'is_featured',
    ];

    protected $casts = [
        'facilities' => 'json',
        'form_config' => 'json',
    ];

    public function order()
    {
        return $this->hasMany(Order::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function addOns()
    {
        return $this->belongsToMany(AddOn::class);
    }

    public function productType()
    {
        return $this->belongsTo(ProductType::class);
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tarif extends Model
{
    use HasFactory, SoftDeletes;

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public static function booted()
    {
        static::creating(function ($model) {
            $model->customer_id = auth()->user()->customer_id;
        });
    }
}

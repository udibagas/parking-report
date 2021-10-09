<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tarif extends Model
{
    use HasFactory, SoftDeletes;

    const MODE_TARIF_FLAT = 0;

    const MODE_TARIF_PROGRESIF = 1;

    const MODE_MENGINAP_24JAM = 0;

    const MODE_MENGINAP_TENGAH_MALAM = 1;

    protected $fillable = [
        'customer_id',
        'nama',
        'group',
        'shortcut_key',
        'tarif_flat',
        'denda_tiket_hilang',
        'is_default',
        'mode_tarif',
        'menit_pertama',
        'tarif_menit_pertama',
        'menit_selanjutnya',
        'tarif_menit_selanjutnya',
        'tarif_maksimum',
        'tarif_menginap',
        'mode_menginap',
        'last_sync'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public static function booted()
    {
        static::creating(function ($model) {
            if (auth()->check()) {
                $model->customer_id = auth()->user()->customer_id;
            }
        });
    }
}

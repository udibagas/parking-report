<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'tanggal',
        'customer_id',
        'jenis_kendaraan',
        'group',
        'jumlah_kendaraan',
        'pendapatan'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}

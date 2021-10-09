<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Terparkir extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'tanggal',
        'jenis_kendaraan',
        'group',
        'jumlah'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}

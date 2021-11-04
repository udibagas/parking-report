<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['nama', 'alamat', 'active', 'masa_aktif'];

    protected $appends = ['expired', 'last_update', 'status'];

    /**
     * Get the value indicating whether the IDs are incrementing.
     *
     * @return bool
     */
    public function getIncrementing()
    {
        return false;
    }

    /**
     * Get the auto-incrementing key type.
     *
     * @return string
     */
    public function getKeyType()
    {
        return 'string';
    }

    public static function booted()
    {
        static::creating(function ($model) {
            $model->id = Str::uuid()->toString();
        });
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function getExpiredAttribute()
    {
        if (!$this->masa_aktif) {
            return false;
        }

        return strtotime($this->masa_aktif) < strtotime(date('Y-m-d'));
    }

    public function getLastUpdateAttribute()
    {
        return $this->reports()->count() ? $this->reports()->latest()->first()->updated_at : null;
    }

    public function getStatusAttribute()
    {
        if ($this->expired) {
            return 'expired';
        }

        return $this->active ? 'aktif' : 'nonaktif';
    }
}

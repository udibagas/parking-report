<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nama' => 'required|max:255',
            'alamat' => 'required|max:255',
            'masa_aktif' => 'date'
        ];
    }

    public function messages()
    {
        return [
            'nama.required' => "Nama harus diisi",
            'nama.max' => 'Maksimal 255 karakter',
            'alamat.required' => "Alamat harus diisi",
            'alamat.max' => 'Maksimal 255 karakter',
            'masa.aktif' => 'Tanggal tidak valid'
        ];
    }
}

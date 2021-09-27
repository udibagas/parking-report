<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = User::with(['customer'])->when($request->keyword, function ($q) use ($request) {
            $q->where('name', 'LIKE', "%{$request->keyword}%");
        })->orderBy('name', 'ASC');

        return $request->paginated ? $data->paginate($request->itemsPerPage) : $data->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $data = User::create($request->all());
        return ['message' => 'Data telah disimpan', 'data' => $data];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $user->update($request->all());

        if ($request->customer) {

            $request->validate([
                'customer.nama' => 'required|max:255',
                'customer.alamat' => 'required|max:255',
            ], [
                'customer.nama.required' => "Nama harus diisi",
                'customer.nama.max' => 'Maksimal 255 karakter',
                'customer.alamat.required' => "Alamat harus diisi",
                'customer.alamat.max' => 'Maksimal 255 karakter',
            ]);

            $user->customer->update($request->customer);
        }

        return ['message' => 'Data telah disimpan', 'data' => $user->load('customer')];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return ['message' => 'Data telah dihapus'];
    }
}

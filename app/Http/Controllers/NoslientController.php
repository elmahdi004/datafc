<?php

namespace App\Http\Controllers;

use App\Models\Noslient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;



class NoslientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    return Noslient::all();

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'href' => 'required',
            'Alt' => 'required',
            'isActive' => 'boolean' ,
            'photo' => 'required',
        ]);
        $datac = [];
        $datac['href'] = $request->href;
        $datac['Alt'] = $request->Alt;
        $datac['isActive'] = $request->isActive||false;
        $datac['user_id'] = $request->user()->id;
        if ($request->hasFile('photo')) {
            $image_path = $request->file('photo')->store('client_logo', 'public');
            $datac["imgSrc"] = $image_path;
        }
        Noslient::create($datac);
    }

    /**
     * Display the specified resource.
     */
    public function show(Noslient $noslient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Noslient $noslient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Noslient $noslient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $client = Noslient::find($id);

        if ($client) {
            $imagePath = $client->imgSrc;
            $client->delete();
            if ($imagePath) {
                Storage::disk('public')->delete($imagePath);
            }
        }
    }
}

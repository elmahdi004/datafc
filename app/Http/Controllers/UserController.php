<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Demande;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
       /// $user =User::get();
       //where("is_admin",0)->
        $user =User::where(function($query) {
            if(request('q')){
            $query->Where('name', 'like', '%' . request('q') . '%')
            ->orWhere('tel', 'like', '%' . request('q') . '%')
            ->orWhere('email', 'like', '%' . request('q') . '%');
            }

        }

        )

        ->paginate(12);;
        return $user;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if($request->id){
            $user=User::findOrFail($request->id);
            $user->update(["block"=>!$user->block]);
            if($user->block==1){
                DB::table('sessions')
                ->where('user_id',$user->id)
                ->delete();
               }
//return $request->id;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function clientDemandes(Request $request )
    {
        $user = $request->user();
        $demandes= Demande::where('user_id',$user->id)->orderBy('id', 'desc')->get();
       foreach($demandes as $demande){
        $demande->formation->categorief;
        $demande->demandeable;
       }
       return $demandes;
    }
}

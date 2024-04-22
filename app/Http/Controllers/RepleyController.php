<?php

namespace App\Http\Controllers;

use App\Models\Repley;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Mail\DataFcEmail;
use Illuminate\Support\Facades\Mail;
class RepleyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'message_id' => 'required|exists:messages,id',
            'object' => 'required|max:255',
            'msg' => 'required',
        ]);

         $msg=Message::findOrFail($request->message_id); 
        //mail
       
        Mail::to($msg->email )
        ->send(new DataFcEmail([
            "objet"=>$request->object,
            "message"=>$request->msg,
        ]));
        $msg->repleys()->create([
            "object"=> $request->object,
            "msg"=> $request->msg,
            "user_id"=>$request->user()->id
        ]);
        $msg->update(["read"=>1]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Repley $repley)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Repley $repley)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Repley $repley)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Repley $repley)
    {
        //
    }
}

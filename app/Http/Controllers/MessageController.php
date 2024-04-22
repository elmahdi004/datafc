<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Message::where(
            function ($query) {
                if (request('q')) {
                    $query->Where('full_name', 'like', '%' . request('q') . '%')
                        ->orWhere('object', 'like', '%' . request('q') . '%')
                        ->orWhere('msg', 'like', '%' . request('q') . '%')
                        ->orWhere('email', 'like', '%' . request('q') . '%');
                }
            }

        )->orderBy('id','desc')->get();
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
            'full_name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'tel' => 'nullable|numeric',
            'object' => 'required|max:255',
            'msg' => 'required',
        ]);

        $message = new Message();
        $message->full_name = $request->full_name;
        $message->email = $request->email;
        $message->tel = $request->tel;
        $message->object = $request->object;
        $message->msg = $request->msg;


        $message->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $message = Message::find($id);
        foreach( $message->repleys as $repl) {
            $repl->user;
        };
        return $message;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demande;
use App\Models\Message;
use App\Models\Formation;
use App\Models\User;



class DashboardController extends Controller
{
    public function statistic()
    {
        $data['Demandes'] = Demande::count();
        $data['Formtions'] = Formation::count();
        $data['Utilisateurs'] = User::count();
        $data['Messages'] = Message::count();
        return $data;
    }
    public function lastDemmandes(){
        $demands = Demande::orderBy('id','desc')->limit(5)->get();
        foreach($demands as $demand){
            $demand->demandeable;
            $demand->user->setVisible(["id","name"]);
            $demand->formation->setVisible(["id","Code","Titre","block","formation_categories_id","categorief"]);
        }


        return $demands;
    }
    public function lastMessage() {
        $messages=Message::orderBy('id','desc')->limit(5)->get();
        foreach($messages as $message){
            $message->setHidden(['msg']);
        }
        return $messages ;
    }
}

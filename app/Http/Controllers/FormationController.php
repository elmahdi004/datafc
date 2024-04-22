<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;

class FormationController extends Controller
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
//return $request;
   $request->validate([
            'Code' => 'required|unique:formations|max:255',
            'Titre' => 'required|max:255',
            'Population_cible' => 'max:255',
            'Duree' => 'max:255',
            'Objectifs' => 'max:255',
            'formationCatId' => 'required|exists:formation_categories,id',
            //'programme_formations' => 'array',
           // 'programme_formations.*.titer' => 'string|max:255',
           // 'programme_formations.*.sous_programmes' => 'array',
           // 'programme_formations.*.sous_programmes.*' => 'string|max:255',
        ]);



        $data = [];
        $data["Code"] = $request->Code;
        $data["Titre"] = $request->Titre;
        $data["Population_cible"] = $request->Population_cible||" ";
        $data["Duree"] = $request->Duree||" ";
        $data["Objectifs"] = $request->Objectifs||" ";
        $data["formation_categories_id"] = $request->formationCatId;
        $formation = Formation::create($data);

       $formation->programmeFormation()->createMany($request->programme_formations);


        /*
        {
    "Code": "155",
    "Titre": "html",
    "Population_cible": "all",
    "Duree": "2 week",
    "Objectifs": "all test",
    "formationCatId": 7,
    "programme_formations": [
        {
            "titer": "web",
            "sous_programmes": [
                "html",
                "php",
                "js"
            ]
        },
        {
            "titer": "mobile",
            "sous_programmes": [
                "c#",
                "sql"
            ]
        }
    ]
}
        */


    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $formation=Formation::findOrFail($id);
        $formation->programmeFormation;
        return $formation;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Formation $formation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'Code' => 'required|unique:formations,Code,'. $id .'|max:255',
            'Titre' => 'required|max:255',
            'Population_cible' => 'max:255',
            'Duree' => 'max:255',
            'Objectifs' => 'max:255',
            'formationCatId' => 'required|exists:formation_categories,id',
        ]);

        $formation=Formation::findOrFail($id);
        $data = [];
        $data["Code"] = $request->Code;
        $data["Titre"] = $request->Titre;
        $data["Population_cible"] = $request->Population_cible;
        $data["Duree"] = $request->Duree;
        $data["Objectifs"] = $request->Objectifs;
        $data["formation_categories_id"] = $request->formationCatId;
         $formation->update($data);
        $formation->programmeFormation()->delete();
        $formation->programmeFormation()->createMany($request->programme_formations);
      /// return $formation;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $formation = Formation::find($request->id);
        $formation->delete();
    }
}

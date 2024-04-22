<?php

namespace App\Http\Controllers;

use App\Models\FormationCategorie;
use Illuminate\Http\Request;
use App\Models\Formation;
use Illuminate\Support\Facades\Storage;

class FormationCategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = FormationCategorie::all();

        return $data;
    }
    public function index2()
    {
        $data = FormationCategorie::all()->setVisible(["id", "CodeFormation", "Titre"]);
        return $data;
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
            'CodeFormation' => 'required|max:100|unique:formation_categories,CodeFormation',
            'Titre' => 'required|string|max:255',
        ]);
        $data = [
            "CodeFormation" => $request->CodeFormation,
            "Titre" => $request->Titre,
        ];

        if ($request->hasFile('photo')) {
            $image_path = $request->file('photo')->store('image', 'public');
            $data["imgFormation"] = $image_path;
        }
        FormationCategorie::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $data = FormationCategorie::find($id);
        foreach ($data->formation as $formation) {
            $formation->programmeFormation;
        }
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
       return FormationCategorie::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $request->validate([
            'Titre' => 'required|string|max:255',
        ]);

    $formationCat = FormationCategorie::findOrFail($id);

    $data = [
        "CodeFormation" => $request->CodeFormation,
        "Titre" => $request->Titre,
    ];

    if ($request->hasFile('imgFormation')) {
        $image_path = $request->file('imgFormation')->store('image', 'public');
        $data["imgFormation"] = $image_path;
        if ($formationCat->imgFormation) {
            if (Storage::disk('public')->exists($formationCat->imgFormation)){
                Storage::disk('public')->delete($formationCat->imgFormation);
            }
        }
    }
    $formationCat->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $formationCategorie=FormationCategorie::find($request->id);
        if($formationCategorie->imgFormation !=="Formation.jpg"){
        if (Storage::exists($formationCategorie->imgFormation)) {
            Storage::delete($formationCategorie->imgFormation);
        }
        }
        $formationCategorie->delete();
    }
    public function showDataForAdmin()
    {
        $datas = FormationCategorie::all();
        foreach ($datas as $data) {
          //  $data->formation;
            foreach ($data->formation as $formati ){
                $formati->programmeFormation;
            }
        };
        return $datas;
    }
}

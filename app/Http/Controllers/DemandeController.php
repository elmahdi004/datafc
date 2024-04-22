<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use App\Models\PersMorale;
use App\Models\PersPhysique;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DemandeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index2(Request $request)
    {
        $ro = $request->row;
        $idf = $request->IDf;
        $order = $request->order ?? 'created_at';
        $desc = false;
        if ($request->DESC == 'true') {
            $desc =  TRUE;
        } else {
            $desc =  FALSE;
        }


        $publications =  Demande::where(function ($quer) {
            if (request('q')) {
                $quer->where('email', 'like', '%' . request('q') . '%')->orWhereHas('demandeable', function ($query) {
                        $query->where(function ($subQuery) {
                            $subQuery->whereHasMorph('demandeable', ['App\Models\PersMorale', 'App\Models\PersPhysique'], function ($morphQuery, $morphType) {
                                if ($morphType === 'App\Models\PersMorale') {
                                    $morphQuery->where('entreprise', 'like', '%' . request('q') . '%');
                                } elseif ($morphType === 'App\Models\PersPhysique') {
                                    $morphQuery->where('prenompm', 'like', '%' . request('q') . '%');
                                }
                            });
                        });
                    })->orWhereHas('user', function ($query) {
                        $query->where('name', 'like', '%' . request('q') . '%');
                    })
                    ->orWhere('tel', 'like', '%' . request('q') . '%')
                    ->orWhere('adresse', 'like', '%' . request('q') . '%');
            }
        })->orderBy($order, $desc ? 'DESC' : 'ASC')->paginate(6);
        foreach ($publications as $publication) {
            $publication->demandeable;
            $publication->user->setVisible(["id", "name"]);
            $publication->formation->setVisible(["id", "Code", "Titre", "block", "formation_categories_id", "categorief"]);
            // $publication->formation->categorief->setVisible(["id","CodeFormation","Titre"]);




        }
        return $publications;
    }
    public function index(Request $request)
    {
        $ro = $request->row;
        $idf = $request->IDf;
        $order = $request->order ?? 'created_at';
        $desc = $request->DESC === 'true';
        $publications = Demande::where(function ($query) {
            if (request('q')) {
                $query->where('email', 'like', '%' . request('q') . '%')
                    ->orWhereHasMorph('demandeable', ['App\Models\PersMorale', 'App\Models\PersPhysique'], function ($morphQuery, $morphType) {
                        if ($morphType === 'App\Models\PersMorale') {
                            $morphQuery->where('entreprise', 'like', '%' . request('q') . '%');
                        } elseif ($morphType === 'App\Models\PersPhysique') {
                            $morphQuery->where('prenompm', 'like', '%' . request('q') . '%');
                        }
                    })
                    ->orWhereHas('user', function ($userQuery) {
                        $userQuery->where('name', 'like', '%' . request('q') . '%');
                    })
                    ->orWhere('tel', 'like', '%' . request('q') . '%')
                    ->orWhere('adresse', 'like', '%' . request('q') . '%');
            }
        })
            ->orderBy($order, $desc ? 'DESC' : 'ASC')
            ->paginate(9);

        $publications->load(['demandeable', 'user', 'formation']);

        $publications->each(function ($publication) {
            $publication->user->setVisible(['id', 'name']);
            $publication->formation->setVisible(['id', 'Code', 'Titre', 'block', 'formation_categories_id', 'categorief']);
        });

        return $publications;
    }

    public function index7(Request $request)
    {
        $order = $request->order ?? 'created_at';
        $desc = $request->DESC == 'true';

        $publications = Demande::when($request->q, function ($query) use ($request) {
            $query->where('email', 'like', '%' . $request->q . '%')
                ->orWhere('tel', 'like', '%' . $request->q . '%')
                ->orWhere('adresse', 'like', '%' . $request->q . '%')
                ->orWhereHas('user', function ($userQuery) use ($request) {
                    $userQuery->where('name', 'like', '%' . $request->q . '%');
                });
        })
            ->orderBy($order, $desc ? 'DESC' : 'ASC');

        return $publications;
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
        $validate = [
            'typeD' => 'required|in:morale,physique',
            'email' => 'required|email||max:255',
            'tel' => 'required|max:255',
            'adresse' => 'required',
            'nbrpers' => 'required|numeric',
            'formation_id' => 'required|exists:formations,id'
        ];
        switch ($request->typeD) {
            case "morale":
                $validate+= [
                    'entreprise' => 'required|max:255',
                    'raisons' => 'required|max:255',
                    'resplonsable' => 'required|max:255',
                    'telres' => 'required|max:255',
                ];
                break;

            case "physique":
                $validate += [
                    'prenompm' => 'required|max:255',
                    'nompm' => 'required|max:255',
                    'typeOrgpm' => 'required',
                    'nomOrgpm' => 'required|max:255',
                ];
                break;
        };

        $request->validate($validate);
        if (in_array($request->typeD, ["morale", "physique"])) {

            $paylod = [];
            $data = [];
            $demande = [];

            $demande["email"] = $request->email;
            $demande["tel"] = $request->tel;
            $demande["adresse"] = $request->adresse;
            $demande["nbrpers"] = $request->nbrpers;
            $demande["status"] = 0;
            $demande["user_id"] = $request->user()->id;
            $demande["formation_id"] = $request->formation_id;

            switch ($request->typeD) {
                case "morale":
                    $request->validate([
                        'entreprise' => 'required|max:255',
                        'raisons' => 'required|max:255',
                        'resplonsable' => 'required|max:255',
                        'telres' => 'required|max:255',
                    ]);
                    $data["entreprise"] = $request->entreprise;
                    $data["raisons"] = $request->raisons;
                    $data["resplonsable"] = $request->resplonsable;
                    $data["telres"] = $request->telres;
                    $paylod = PersMorale::create($data);
                    $paylod->demandes()->create($demande);

                    break;

                case "physique":
                    $request->validate([
                        'prenompm' => 'required|max:255',
                        'nompm' => 'required|max:255',
                        'typeOrgpm' => 'required',
                        'nomOrgpm' => 'required|max:255',
                    ]);
                    $data["prenompm"] = $request->prenompm;
                    $data["nompm"] = $request->nompm;
                    $data["typeOrgpm"] = $request->typeOrgpm;
                    $data["nomOrgpm"] = $request->nomOrgpm;
                    $paylod = PersPhysique::create($data);
                    $paylod->demandes()->create($demande);

                    break;

                default:
                    break;
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Demande $demande)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Demande $demande)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $demande = Demande::find($request->id);
        $demande->status = 1;
        $demande->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demande $demande)
    {
        //
    }
    public function destroyMany(Request $request)
    {
        if (Hash::check($request->password, Auth::user()->password)) {
            Demande::destroy($request->DemandeIds);
            return $request;
        } else {
            return response([
                'errors' => ['password' => 'Le mot de passe est incorrect']
            ], 422);
        }
    }
}

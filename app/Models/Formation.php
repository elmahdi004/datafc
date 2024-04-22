<?php

namespace App\Models;
use App\Models\ProgrammeFormation;
use App\Models\FormationCategorie;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;
    protected $fillable = [
        "Code","Titre","Objectifs","Population_cible","Duree","block","formation_categories_id"
    ];
    public $timestamps = false;

    public function programmeFormation()
    {
        return $this->hasMany(ProgrammeFormation::class);
    }
    public function categorief(){
        return $this->belongsTo(FormationCategorie::class , 'formation_categories_id');
    }
}

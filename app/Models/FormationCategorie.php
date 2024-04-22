<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Formation;
class FormationCategorie extends Model
{
    use HasFactory;
    protected $primaryKey="id";
    protected $fillable = ["id","CodeFormation","Titre","imgFormation"];
    public $timestamps = false;

    public function formation()
    {
        return $this->hasMany(Formation::class,'formation_categories_id');
    }
}

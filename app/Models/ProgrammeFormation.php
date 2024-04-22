<?php

namespace App\Models;
use App\Models\Formation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class ProgrammeFormation extends Model
{
    use HasFactory;
    protected $fillable = ["Titre","formation_id","sous_programmes"];
    protected $casts = [
        'sous_programmes' => 'array'
    ];
    public $timestamps = false;

    public function formation()
    {
        return $this->belongsTo(Formation::class,"formation_id");
    }
}

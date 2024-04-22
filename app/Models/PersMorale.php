<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Demande;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class PersMorale extends Model
{
    use HasFactory;
    protected $fillable = ["id","entreprise","raisons","resplonsable","telres"];
    /*
    public function demande() {
        return $this->belongsTo('App\Demande');
    }
    */
    public function demandes()
    {
        return $this->morphMany(Demande::class, 'demandeable');
        //  return $this->morphTo();
    }
}

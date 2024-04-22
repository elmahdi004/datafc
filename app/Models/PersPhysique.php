<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class PersPhysique extends Model
{
    use HasFactory;
    protected $fillable = ["id","prenompm","nompm","typeOrgpm","nomOrgpm"];

    /*
    public function demande() {
        return $this->belongsTo('App\Demande');
    }
    */
    /*  public function demandes()
    {
        return $this->morphMany(Demande::class, 'demandeable');
    } */
    public function demandes()
    {
        return $this->morphMany(Demande::class, 'demandeable');
        //  return $this->morphTo();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PersPhysique;
use App\Models\PersMorale;
use App\Models\User;


class Demande extends Model
{
    use HasFactory;
    protected $fillable = ["id","demandeable_type","demandeable_id","formation_id","email","tel","adresse","nbrpers","status","user_id"];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i',
        'updated_at' => 'datetime:Y-m-d H:i',
    ];
    public function Persphysique()
    {
        return $this->morphOne(PersPhysique::class, 'demandeable');
    }
    public function Persmorale()
    {
        return $this->morphOne(PersMorale::class, 'demandeable');
    }
    public function demandeable()
    {
        return $this->morphTo();
    }
    public function formation()  {
        return $this->belongsTo(Formation::class , 'formation_id');
    }
    public function user()  {
        return $this->belongsTo(User::class , 'user_id');
    }
}

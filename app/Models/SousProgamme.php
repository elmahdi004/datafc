<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SousProgamme extends Model
{
    use HasFactory;
    protected $fillable = ["Description","Programmes_formation_id"];
}

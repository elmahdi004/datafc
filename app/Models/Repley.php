<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Message;


class Repley extends Model
{
    use HasFactory;
    protected $fillable = ['object','message_id','msg','user_id'];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i',
        'updated_at' => 'datetime:Y-m-d H:i',
    ];
    public function user()  {
        return $this->belongsTo(User::class , 'user_id');
    }
    public function message()  {
        return $this->belongsTo(Message::class);
    }
}

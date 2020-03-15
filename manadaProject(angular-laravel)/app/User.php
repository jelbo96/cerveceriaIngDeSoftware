<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['nombre', 'contraseña'];

    protected $guarded = ['activo', 'administrador'];

    protected $hidden = ['contraseña'];
}

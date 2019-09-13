<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = ['nombre', 'contraseña'];

    protected $guarded = ['activo', 'administrador'];

    protected $hidden = ['contraseña'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bash extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = ['name_bash', 'type_beer', 'capacity', 'liters_now'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bash extends Model
{
    //
    protected $table = 'bash';
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = ['name_bash', 'type_beer', 'capacity', 'liters_now'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'address', 'contact_number'];
}

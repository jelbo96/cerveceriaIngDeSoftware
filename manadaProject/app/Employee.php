<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = ['name'];
    //protected $fillable = ['working_hours'];
    //protected $fillable = ['role'];
    //protected $fillable = ['address'];
    //protected $fillable = ['phone_number'];
}

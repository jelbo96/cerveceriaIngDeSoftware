<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'working_hours', 'role', 'address', 'phone_number'];
    //protected $fillable = ['working_hours'];
    //protected $fillable = ['role'];
    //protected $fillable = ['address'];
    //protected $fillable = ['phone_number'];
}

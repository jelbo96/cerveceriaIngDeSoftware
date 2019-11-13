<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'id';
    protected $fillable = ['delivery_date', 'type_beer', 'liters', 'folio', 'additional_info', 'package'];

    public function client(){
        return $this->belongsTo('App\Client');
    }
    public function bash(){
        return $this->belongsTo('App\Bash');
    }  
}

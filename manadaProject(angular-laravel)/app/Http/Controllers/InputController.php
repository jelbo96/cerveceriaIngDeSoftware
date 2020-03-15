<?php

namespace App\Http\Controllers;

use App\Input;
use App\Http\Resources\Input as InputResource;
use App\Http\Resources\InputCollection;
use Illuminate\Http\Request;

class InputController extends Controller
{
    public function index()
    {
        return new InputCollection(Input::all());
    }

    public function show($id)
    {
        return new InputResource(Input::findOrFail($id));
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['only' => 'index']);
    }
    public function index()
    {
        return view('login');
    }

    public function login()
    {
        $credentials = $this->validate(request(), [
            'name'=> 'required|string',
            'password' => 'required|string'
        ]);
            
        if(Auth::attempt($credentials))
        {
            return redirect()->route('dashboard');
        }

        return back()
            ->withErrors(['name' => trans('auth.failed')])
            ->withInput(request(['name']));
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }
}

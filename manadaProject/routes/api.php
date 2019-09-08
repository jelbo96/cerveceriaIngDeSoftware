<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usuarios', 'UsuarioController@index');
Route::get('/usuarios/{id}', 'UsuarioController@mostrar');
Route::post('/usuarios', 'UsuarioController@guardar');
Route::post('/usuarios/{id}/answers', 'UsuarioController@answer');
Route::delete('/usuarios/{id}', 'UsuarioController@delete');
Route::delete('/usuarios/{id}/answers', 'UsuarioController@resetAnswers');
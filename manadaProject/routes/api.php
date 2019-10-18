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

Route::get('/usuarios', 'UserController@index');
Route::get('/usuarios/{id}', 'UserController@show');
Route::post('/usuarios', 'UserController@store');
Route::post('/usuarios/{id}/answers', 'UserController@answer');
Route::delete('/usuarios/{id}', 'UserController@delete');
Route::delete('/usuarios/{id}/answers', 'UserController@resetAnswers');
Route::resource('employee', 'EmployeeController');
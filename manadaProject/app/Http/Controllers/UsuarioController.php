<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Usuario;
use App\Http\Resources\Usuario as UsuarioResource;
use App\Http\Resources\UsuarioColeccion;

class UsuarioController extends Controller
{
    public function index()
    {
        return new UsuarioColeccion(Usuario::all());
    }

    public function mostrar($id)
    {
        return new UsuarioResource(Usuario::findOrFail($id));
    }

    public function guardar(Request $request)
    {
        $request->validate([
            'nombre' => 'required|max:255',
        ]);

        $usuario = Usuario::create($request->all());

        return (new UsuarioResource($usuario))
                ->response()
                ->setStatusCode(201);
    }

    public function answer($id, Request $request)
    {
        $request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $request->validate([
            'correct' => 'required|boolean'
        ]);

        $player = Player::findOrFail($id);
        $player->answers++;
        $player->points = ($request->get('correct')
                           ? $player->points + 1
                           : $player->points - 1);
        $player->save();

        return new PlayerResource($player);
    }

    public function delete($id)
    {
        $player = Player::findOrFail($id);
        $player->delete();

        return response()->json(null, 204);
    }

    public function resetAnswers($id)
    {
        $player = Player::findOrFail($id);
        $player->answers = 0;
        $player->points = 0;

        return new PlayerResource($player);
    }
}

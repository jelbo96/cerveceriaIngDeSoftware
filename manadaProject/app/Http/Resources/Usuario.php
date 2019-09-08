<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Usuario extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'contraseña' => $this->contraseña,
            'activo' => $this->activo,
            'administrador' => $this->administrador,
            'creado' => $this->creado,
            'borrado' => $this->borrado
        ];
    }
}

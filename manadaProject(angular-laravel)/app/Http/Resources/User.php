<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'name' => $this->name,
            'password' => $this->password,
            'active_user' => $this->active_user,
            'admin' => $this->admin,
            'created_at' => $this->created_at,
            'deleted_at' => $this->deleted_at
        ];
    }
}

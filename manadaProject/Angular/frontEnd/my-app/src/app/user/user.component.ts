import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  private _users: [] = [{
    "nombreCerveza": "jelbo",
    "cantidad": 20,
    "destino": "villarrica"
  },
  {
    "nombreCerveza": "yoshi",
    "cantidad": 30,
    "destino": "valdivia"
  }
  ];
  public get users(): [] {
    return this._users;
  }
  public set users(value: []) {
    this._users = value;
  }

 mostrarInput=false;


}

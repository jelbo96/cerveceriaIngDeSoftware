import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users = [{
    "nombreCerveza": "jelbo",
    "cantidad": 20,
    "destino": "villarrica"
  },
  {
    "nombreCerveza": "yoshi",
    "cantidad": 30,
    "destino": "valdivia"
  }]
  ;


 mostrarInput=false;


}

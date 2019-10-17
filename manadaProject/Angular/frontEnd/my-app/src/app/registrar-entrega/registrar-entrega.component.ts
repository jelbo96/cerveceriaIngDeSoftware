import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-entrega',
  templateUrl: './registrar-entrega.component.html',
  styleUrls: ['./registrar-entrega.component.scss']
})
export class RegistrarEntregaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  /*
  addUser(newUser){
    if(newUser.value.length>0){
      this.users.push(newUser.value);
    }
    newUser.value='';
    return false;
  }

  deleteUser(user){
    for(let i =0; i<this.users.length; i++){
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  */

}

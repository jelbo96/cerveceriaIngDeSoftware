import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})

export class CrearClienteComponent implements OnInit {
  showMsg: boolean = false;
  constructor(private clientService: ClientService){}
  private clientlist = this.clientService.get_clients();

  onSubmit(data) {
    // Process checkout data here
    console.warn('Se ha leido el formulario', data);
    //Aqui tengo que hacer el post
    this.clientService.add_client(data);
    this.showMsg= true;
  }
  ngOnInit() {
  }

}

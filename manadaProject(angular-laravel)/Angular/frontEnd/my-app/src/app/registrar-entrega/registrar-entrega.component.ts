import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-registrar-entrega',
  templateUrl: './registrar-entrega.component.html',
  styleUrls: ['./registrar-entrega.component.scss']
})

export class RegistrarEntregaComponent implements OnInit {
  showMsg: boolean = false;
  constructor(private clientService: ClientService){}
  private clientlist = this.clientService.get_clients();
  private bashlist = this.clientService.get_bash();

  onSubmit(data) {
    // Process checkout data here
    console.warn('Se ha leido el formulario', data);
    
    //Aqui tengo que hacer el post
    this.clientService.add_deliveries(data);
    this.showMsg= true;
  }

  ngOnInit() {
  }

}

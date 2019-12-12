import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClientService} from '../services/client.service';
import {Client} from '../model/client';

@Component({
  selector: 'app-registrar-entrega',
  templateUrl: './registrar-entrega.component.html',
  styleUrls: ['./registrar-entrega.component.scss']
})

export class RegistrarEntregaComponent implements OnInit {
  deliveryForm;
  constructor(private clientService: ClientService,
    private formBuilder: FormBuilder,) {


      this.deliveryForm = this.formBuilder.group({
        //
        type_beer: '',
        liters: '',
        folio: '',
        additional_info: '',
        package: '',
        client: '',
        bash: ''
      });
  
    }
  
  private clientlist = this.clientService.get_clients();
  private bashlist = this.clientService.get_bash();


  onSubmit(data) {
    // Process checkout data here
    console.warn('Se ha leido el formulario', data);
    this.deliveryForm.reset();
    //Aqui tengo que hacer el post
    this.clientService.add_deliveries(data);
  }

  ngOnInit() {
  }

}

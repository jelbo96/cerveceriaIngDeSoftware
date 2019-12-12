import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import { FormBuilder } from '@angular/forms';
import {ClientService} from '../services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})

export class CrearClienteComponent implements OnInit {
  clients: Observable<Client[]>
  clientForm;
  constructor(private clientService: ClientService,
    private formBuilder: FormBuilder,) {


    this.clientForm = this.formBuilder.group({
      name: '',
      address: '',
      contact_number: ''
    });

  }
  private clientlist = this.clientService.get_clients();

  onSubmit(data) {
    // Process checkout data here
    console.warn('Se ha leido el formulario', data);
    this.clientForm.reset();
    //Aqui tengo que hacer el post
    this.clientService.add_client(data);



    console.warn(data.name, data.address, data.contact_number);
  }
  ngOnInit() {
  }

}

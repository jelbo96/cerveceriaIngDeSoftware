import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service'

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  constructor(private clientService: ClientService) {}
  private clientlist = this.clientService.get_clients();
  ngOnInit() {
  }

}
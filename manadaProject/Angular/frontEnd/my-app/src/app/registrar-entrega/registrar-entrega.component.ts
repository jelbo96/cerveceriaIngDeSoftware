import { Component, OnInit } from '@angular/core';

import {ClientService} from '../services/client.service'
import {Client} from '../model/client'

@Component({
  selector: 'app-registrar-entrega',
  templateUrl: './registrar-entrega.component.html',
  styleUrls: ['./registrar-entrega.component.scss']
})
export class RegistrarEntregaComponent implements OnInit {

  constructor(private clientService: ClientService) {}
  private clientlist = this.clientService.get_clients();
  private bashlist = this.clientService.get_bash();
  ngOnInit() {
  }

}

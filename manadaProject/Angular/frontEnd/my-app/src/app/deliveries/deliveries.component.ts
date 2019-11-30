import { Component, OnInit, Input } from '@angular/core';

import {ClientService} from '../services/client.service'
import {Delivery} from '../model/delivery'

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  constructor(private clientService: ClientService) {}
  private deliverieslist = this.clientService.get_deliveries();
  ngOnInit() {
  }

}
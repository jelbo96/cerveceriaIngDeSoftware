import { Component, OnInit, Input } from '@angular/core';

import {ClientService} from '../services/client.service'
import {Client} from '../model/client'

import {DataService} from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private clientService: ClientService) {}
  private clientlist = this.clientService.get_clients();
  ngOnInit() {
  }
}

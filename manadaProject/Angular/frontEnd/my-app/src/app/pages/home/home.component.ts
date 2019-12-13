import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //Obtener los bash
  constructor(private clientService: ClientService) { }
  private bashlist = this.clientService.get_bash();
  ngOnInit() {
  }
}

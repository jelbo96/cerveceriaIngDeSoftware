import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.scss']
})
export class BashComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  private bashlist = this.clientService.get_bash();
  ngOnInit() {
  }

}

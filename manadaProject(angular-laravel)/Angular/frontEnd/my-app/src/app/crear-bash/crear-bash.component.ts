import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-crear-bash',
  templateUrl: './crear-bash.component.html',
  styleUrls: ['./crear-bash.component.scss']
})
export class CrearBashComponent implements OnInit {
  showMsg: boolean = false;
  constructor(private clientService: ClientService){}
  private bashlist = this.clientService.get_bash();

  onSubmit(data) {
    // Process checkout data here
    console.warn('Se ha leido el formulario', data);
    //Aqui tengo que hacer el post
    this.clientService.add_bash(data)
    this.showMsg= true;
  }    
      
  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClientService} from '../services/client.service';


@Component({
  selector: 'app-crear-bash',
  templateUrl: './crear-bash.component.html',
  styleUrls: ['./crear-bash.component.scss']
})
export class CrearBashComponent implements OnInit {
  bashForm;
  constructor(private clientService: ClientService,
    private formBuilder: FormBuilder,) {


      this.bashForm = this.formBuilder.group({
        //
        name_bash: '',
        type_beer: '',
        capacity: '',
        liters_now: '',
      });
  
    }
  private bashlist = this.clientService.get_bash();

  onSubmit(data) {
    // Process checkout data here
    console.warn('Se ha leido el formulario', data);
    this.bashForm.reset();
    //Aqui tengo que hacer el post
    this.clientService.add_bash(data);
  }

  ngOnInit() {
  }

}
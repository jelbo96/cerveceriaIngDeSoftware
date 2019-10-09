import { Component } from '@angular/core';
import{DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users:string[]= ['ryan', 'john', 'cameron'];

  posts=[];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data=>{
      this.posts=data;
    })

  }

  addUser(newUser){
    if(newUser.value.length>0){
      this.users.push(newUser.value);
    }
    newUser.value='';
    return false;
  }

  deleteUser(user){
    for(let i =0; i<this.users.length; i++){
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }




}

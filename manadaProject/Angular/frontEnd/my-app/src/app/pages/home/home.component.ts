import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Post} from '../../Post';
@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomeComponent {
  posts: Post[];
  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      this.posts = data;
    })
  }
}

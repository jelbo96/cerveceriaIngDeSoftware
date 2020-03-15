import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {OtrocomponenteComponent} from './otrocomponente/otrocomponente.component'
import {UserComponent} from './user/user.component'

const routes: Routes = [
  {
    path: '',
    component: OtrocomponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Route} from '@angular/router';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//componentes
import { AppComponent } from './app.component';
import {HomeComponent} from './pages/home/home.component';
import { OtrocomponenteComponent } from './otrocomponente/otrocomponente.component';
import { UserComponent } from './user/user.component'

//servicios
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarEntregaComponent } from './registrar-entrega/registrar-entrega.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { BashComponent } from './bash/bash.component';
import { CrearBashComponent } from './crear-bash/crear-bash.component';

const routes: Route[] = [
  {
    path: '', component: OtrocomponenteComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'registrar-entrega', component: RegistrarEntregaComponent
  },
  {
    path:'clientes', component: UserComponent
  },
  {
    path:'crear-cliente', component: CrearClienteComponent
  },
  {
    path:'deliveries', component: DeliveriesComponent
  },
  {
    path:'bash', component: BashComponent
  },
  {
    path:'crear-bash', component: CrearBashComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtrocomponenteComponent,
    UserComponent,
    RegistrarEntregaComponent,
    DeliveriesComponent,
    CrearClienteComponent,
    BashComponent,
    CrearBashComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

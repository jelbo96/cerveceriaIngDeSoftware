import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtrocomponenteComponent,
    UserComponent,
    RegistrarEntregaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

const routes: Routes[] = [
  {
    path: 'a', component: OtrocomponenteComponent
  },
  {
    path:'home', component: HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtrocomponenteComponent,
    UserComponent,

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

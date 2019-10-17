import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
/*
  getUserDetails(){

    return this.http.post('/ruta-api/auth.php',{
      mail,
      password
    })
  }
*/
}

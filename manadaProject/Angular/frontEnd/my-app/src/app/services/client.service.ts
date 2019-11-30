import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
export class ClientService {
//url de la api del servidor de rails
baseUrl = 'http://localhost:8000/api'
constructor(private http:HttpClient) { }
//metodo para obtener los datos del api en rails
public get_clients(){
return this.http.get(this.baseUrl+'/client');
}
}
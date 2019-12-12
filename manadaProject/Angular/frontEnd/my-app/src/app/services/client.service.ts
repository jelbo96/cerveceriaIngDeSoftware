import { Injectable } from "@angular/core";
import {Client} from "../model/client0";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})

export class ClientService {
  
  
  //url de la api del servidor de rails
  baseUrl = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}
  //metodo para obtener los datos del api en rails
  public get_clients() {
    return this.http.get(this.baseUrl + "/client");
  }

  public add_client(client){
  var name = ""+client.name+"";
  var address = ""+client.address+"";
  var contact_number = ""+client.contact_number+"";
  return this.http.post(this.baseUrl + "/client",
    {
        "name": name,
        "address": address,
        "contact_number": contact_number,
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });

}

  public get_bash() {
    return this.http.get(this.baseUrl + "/bash");
  }

  public get_deliveries() {
    return this.http.get(this.baseUrl + "/delivery");
  }

  public add_deliveries(delivery) {
    return this.http.post(this.baseUrl + "/delivery", delivery);
  }
}

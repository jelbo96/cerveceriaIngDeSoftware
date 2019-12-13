import { Injectable } from "@angular/core";
import { Client } from "../model/client";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
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

  public add_client(client) {
    var name = "" + client.name + "";
    var address = "" + client.address + "";
    var contact_number = "" + client.contact_number + "";
    return this.http
      .post(this.baseUrl + "/client", {
        name: name,
        address: address,
        contact_number: contact_number
      })
      .subscribe(
        val => {
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
  }

  public get_bash() {
    return this.http.get(this.baseUrl + "/bash");
  }

  public get_deliveries() {
    return this.http.get(this.baseUrl + "/delivery");
  }


  public add_bash(bash) {
    var name_bash = "" + bash.name_bash + "";
    var type_beer = "" + bash.type_beer + "";;
    var capacity = "" + bash.capacity + "";
    //var liters_now = "" + bash.capacity + "";
    return this.http
      .post(this.baseUrl + "/bash", {
        name_bash: name_bash,
        type_beer: type_beer,
        capacity: capacity,
        liters_now: capacity
      })
      .subscribe(
        val => {
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
  }


  public add_deliveries(delivery) {
    var type_beer = "" + delivery.type_beer + "";
    var liters = "" + delivery.liters + "";;
    var folio = "" + delivery.folio + "";
    var additional_info = "" + delivery.additional_info + "";
    var package_beer = "" + delivery.package + "";
    var client = "" + delivery.client + "";
    var bash = "" + delivery.bash + "";
    return this.http
      .post(this.baseUrl + "/delivery", {
        type_beer: type_beer,
        liters: liters,
        folio: folio,
        additional_info: additional_info,
        package: package_beer,
        client_id: client,
        bash_id: bash
      })
      .subscribe(
        val => {
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        }
      );
  }
  
}

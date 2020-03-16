import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoServiceService {

  constructor(private http: HttpClient) { 
  }

  public saludo():void {
    console.log("Hola mundo desd e mi servicio");
  }

  public getData():any {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  apiUrl : string = "";
  //apiUrl : string ="";
  sumarUrl : string = "";
  restarUrl : string = "";
  multiplicarUrl : string = "";
  dividirUrl  : string = "";
  determinante2x2Url : string = "";
  determinante3x3Url : string = "";

  constructor( private http : HttpClient) { }


  sumar(p1k : any, p1j : any, p2k : any, p2j : any){

    let params = new HttpParams();
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");

    return this.http.get(`${this.apiUrl}${this.sumarUrl}`, { params : params })
    .pipe( result => {
      return result;
    })
  }

  restar(p1k : any, p1j : any, p2k : any, p2j : any){

    let params = new HttpParams();
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");

    return this.http.get(`${this.apiUrl}${this.restarUrl}`, { params : params })
    .pipe( result => {
      return result;
    })

  }

  multiplicar(p1k : any, p1j : any, p2k : any, p2j : any){

    let params = new HttpParams();
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");

    return this.http.get(`${this.apiUrl}${this.multiplicarUrl}`, { params : params })
    .pipe( result => {
      return result;
    })
    
  }

  dividir(p1k : any, p1j : any, p2k : any, p2j : any){

    let params = new HttpParams();
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");

    return this.http.get(`${this.apiUrl}${this.dividirUrl}`, { params : params })
    .pipe( result => {
      return result;
    })

  }

  hallarDeterminante2x2(){

    let params = new HttpParams();
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", "");

    return this.http.get(`${this.apiUrl}${this.determinante2x2Url}`, { params : params })
    .pipe( result => {
      return result;
    })

  }

  hallarDeterminante3x3(){

    let params = new HttpParams();
    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", ""); 

    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", ""); 

    params = params.set("", "");
    params = params.set("", "");
    params = params.set("", ""); 

    return this.http.get(`${this.apiUrl}${this.determinante3x3Url}`, { params : params })
    .pipe( result => {
      return result;
    })

  }

}

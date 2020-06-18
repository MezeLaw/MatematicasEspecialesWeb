import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  //apiUrl : string = "http://127.0.0.1:5000/";
  apiUrl : string ="https://floating-hamlet-80678.herokuapp.com/";
  sumarUrl : string = "sumaCompleja";
  restarUrl : string = "restaCompleja";
  multiplicarUrl : string = "multiplicacionCompleja";
  dividirUrl  : string = "divisionCompleja";
  determinante2x2Url : string = "determinante2x2";
  determinante3x3Url : string = "determinante3x3";

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

  hallarDeterminante2x2(a1 : any, a2 : any, b1 : any, b2 : any){

    let params = new HttpParams();
    params = params.set("A1", a1);
    params = params.set("A2", a2);
    params = params.set("B1", b1);
    params = params.set("B2", b2);

    return this.http.get(`${this.apiUrl}${this.determinante2x2Url}`, { params : params })
    .pipe( result => {
      return result;
    })

  }

  hallarDeterminante3x3(a1 : any, a2 : any, a3 : any, b1 : any, b2 : any, b3 : any, c1 : any, c2 : any, c3 : any){

    let params = new HttpParams();
    params = params.set("A1", a1);
    params = params.set("A2", a2);
    params = params.set("A3", a3); 

    params = params.set("B1", b1);
    params = params.set("B2", b2);
    params = params.set("B3", b3); 

    params = params.set("C1", c1);
    params = params.set("C2", c2);
    params = params.set("C3", c3); 

    return this.http.get(`${this.apiUrl}${this.determinante3x3Url}`, { params : params })
    .pipe( result => {
      return result;
    })

  }

}

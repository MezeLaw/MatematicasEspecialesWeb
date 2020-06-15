import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrateService {
  //apiUrl : string = 'http://127.0.0.1:5000/';
  apiUrl : string = 'https://floating-hamlet-80678.herokuapp.com/';
  primerOrdenUrl : string = 'calcularPrimerOrden';
  segundoOrdenUrl : string = 'calcularSegundoOrden';
  summaryUrl : string = 'summary';

  constructor(private http : HttpClient) {     
  }


  calcularPrimerOrden(x1 : any, x : any, k:any, primerValorInicial :any){

    let params = new HttpParams();
    params = params.append('x1', x1);
    params = params.append('x', x);
    params = params.append('k', k);
    params = params.append('primerValorInicial', primerValorInicial);


    return this.http.get(`${this.apiUrl}${this.primerOrdenUrl}`, {params : params})
    .pipe( result=>{
      return result;
    })
     
  }

  calcularSegundoOrden(x2 : any, x1 : any, x : any, k : any, primerValorInicial : any, segundoValorInicial : any){
    let params = new HttpParams();

    params = params.append('x2', x2);
    params = params.append('x1', x1);
    params = params.append('x', x);
    params = params.append('k', k);
    params = params.append('primerValorInicial', primerValorInicial);
    params = params.append('segundoValorInicial', segundoValorInicial);


    return this.http.get(`${this.apiUrl}${this.segundoOrdenUrl}`, { params: params })
    .pipe( result =>{{
        return result;
    }})

  }


  summary(){
    return this.http.get(`${this.apiUrl}${this.summaryUrl}`)
    .pipe( result => {
      return result;
    })
  }
  
}

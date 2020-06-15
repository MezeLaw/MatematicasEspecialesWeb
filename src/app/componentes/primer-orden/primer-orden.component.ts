import { IntegrateService } from './../../servicios/integrate.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-primer-orden',
  templateUrl: './primer-orden.component.html',
  styleUrls: ['./primer-orden.component.css']
})
export class PrimerOrdenComponent implements OnInit {

  isLoading : boolean;
  successResponse : boolean;
  errorResponse : boolean;
  result : any;

  form : FormGroup;

  constructor(private is : IntegrateService,
              private fb : FormBuilder) { 
                this.crearForm();
  }

  ngOnInit() {
  }

  calcularIntegralPrimerOrden(){   
    this.result = '';
    this.isLoading = true;
    this.successResponse = false;
    this.errorResponse = false;

    let x1 = this.form.get('x1').value;
    let x = this.form.get('x').value;
    let k = this.form.get('k').value;
    let primerValorInicial = this.form.get('primerValorInicial').value;

    this.is.calcularPrimerOrden(x1, x, k, primerValorInicial)
    .subscribe(result=>{ 
      console.log(result)
      this.result = result['response']
      this.successResponse = true;
      this.errorResponse = false;
      this.isLoading = false;
    }, (error)=>{ 
      this.successResponse = false;
      this.errorResponse = true;
      this.isLoading = false; 
    })
  }


  crearForm(){
    this.form = this.fb.group({
      x1:['0'],
      x:['0'],
      k:['0'],
      primerValorInicial:['0']
    });
  };

}

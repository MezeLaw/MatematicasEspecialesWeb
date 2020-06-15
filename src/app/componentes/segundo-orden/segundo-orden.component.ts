import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntegrateService } from 'src/app/servicios/integrate.service';

@Component({
  selector: 'app-segundo-orden',
  templateUrl: './segundo-orden.component.html',
  styleUrls: ['./segundo-orden.component.css']
})
export class SegundoOrdenComponent implements OnInit {

  form : FormGroup;
  errorResponse : boolean;
  successResponse : boolean;
  isLoading : boolean;
  result : any;

  constructor(private fb : FormBuilder,
              private is : IntegrateService) {
              this.crearForm();
   }

  ngOnInit() {
  }

  crearForm(){
    this.form = this.fb.group({
      x2:[0, Validators.required],
      x1:[0, Validators.required],
      x:[0, Validators.required],
      k:[0, Validators.required],
      primerValorInicial:[0, Validators.required],
      segundoValorInicial:[0, Validators.required]
    })
  }

  calcularSegundoOrden(){
    this.result = '';
    this.isLoading = true;
    this.successResponse = false;
    this.errorResponse = false;

    let x2 = this.form.get('x2').value;
    let x1 = this.form.get('x1').value;
    let x = this.form.get('x').value;
    let k = this.form.get('k').value;
    let primerValorInicial = this.form.get('primerValorInicial').value;
    let segundoValorInicial = this.form.get('segundoValorInicial').value;

    this.is.calcularSegundoOrden(x2, x1, x, k, primerValorInicial, segundoValorInicial)
    .subscribe(result=>{ 
      this.result = result['response'];
      this.successResponse = true;
      this.errorResponse = false;
      this.isLoading = false;
      console.log(result)
    }, (error)=>{ 
      this.successResponse = false;
      this.errorResponse = true;
      this.isLoading = false;
    })

  }

}

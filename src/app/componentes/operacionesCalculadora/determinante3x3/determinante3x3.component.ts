import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculatorService } from 'src/app/servicios/calculator.service';

@Component({
  selector: 'app-determinante3x3',
  templateUrl: './determinante3x3.component.html',
  styleUrls: ['./determinante3x3.component.css']
})
export class Determinante3x3Component implements OnInit {

  form : FormGroup;
  isLoading : boolean;
  requestError : boolean;
  requestSuccess : boolean;
  result : any;

  constructor(private cs : CalculatorService,
              private fb : FormBuilder) {
                this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      A1: [0, Validators.required],
      A2: [0, Validators.required],
      A3: [0, Validators.required],
      B1: [0, Validators.required],
      B2: [0, Validators.required],
      B3: [0, Validators.required], 
      C1: [0, Validators.required],
      C2: [0, Validators.required],
      C3: [0, Validators.required]
    })
  }

  calcularDeterminante(){
    this.result = '';
    this.requestError = false;
    this.requestSuccess = true;
    this.isLoading = true;

    let a1 = this.form.get('A1').value;
    let a2 = this.form.get('A2').value;
    let a3 = this.form.get('A3').value; 
    let b1 = this.form.get('B1').value;
    let b2 = this.form.get('B2').value; 
    let b3 = this.form.get('B3').value;
    let c1 = this.form.get('C1').value; 
    let c2 = this.form.get('C2').value;
    let c3 = this.form.get('C3').value;

    this.cs.hallarDeterminante3x3(a1, a2, a3, b1, b2, b3, c1, c2, c3)
    .subscribe( result =>{
      this.result = result['response'];
      this.requestSuccess = true;
      this.requestError = false;
      this.isLoading = false;
    }, (error)=>{
      this.requestError = true;
      this.requestSuccess = false;
      this.result = '';
      this.isLoading = false;
    })

  }


  get invalidA1(){
    return this.form.get('A1').touched && this.form.get('A1').invalid;
  }

  get invalidA2(){
    return this.form.get('A2').touched && this.form.get('A2').invalid;
  }

  get invalidA3(){
    return this.form.get('A3').touched && this.form.get('A3').invalid;
  }

  get invalidB1(){
    return this.form.get('B1').touched && this.form.get('B1').invalid;
  }

  get invalidB2(){
    return this.form.get('B2').touched && this.form.get('B2').invalid;
  }

  get invalidB3(){
    return this.form.get('B3').touched && this.form.get('B3').invalid;
  }


  get invalidC1(){
    return this.form.get('C1').touched && this.form.get('C1').invalid;
  }

  get invalidC2(){
    return this.form.get('C2').touched && this.form.get('C2').invalid;
  }

  get invalidC3(){
    return this.form.get('C3').touched && this.form.get('C3').invalid;
  }

}

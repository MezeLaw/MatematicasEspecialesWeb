import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculatorService } from 'src/app/servicios/calculator.service';

@Component({
  selector: 'app-determinante2x2',
  templateUrl: './determinante2x2.component.html',
  styleUrls: ['./determinante2x2.component.css']
})
export class Determinante2x2Component implements OnInit {

  form : FormGroup;

  result : any;
  isLoading : boolean;
  requestError : boolean;
  requestSuccess : boolean;

  constructor(private fb : FormBuilder, 
              private cs : CalculatorService) {
                this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      A1:[0, Validators.required],
      A2:[0, Validators.required],
      B1:[0, Validators.required],
      B2:[0, Validators.required]
    })
  }

  calcularDeterminante(){
    this.requestError = false;
    this.requestSuccess = false;
    this.isLoading = true;
    this.result = '';

    this.cs.hallarDeterminante2x2()
    .subscribe( result=> {
      this.result = result;
      this.requestError = false;
      this.requestSuccess = true;
      this.isLoading = false;
    }, (error)=>{
      this.requestError = true;
      this.requestSuccess = false;
      this.isLoading = false;
    })
  }

  get invalidA1(){
    return this.form.get('A1').touched && this.form.get('A1').invalid;
  }

  get invalidA2(){
    return this.form.get('A2').touched && this.form.get('A2').invalid;
  }

  get invalidB1(){
    return this.form.get('B1').touched && this.form.get('B1').invalid;
  }

  get invalidB2(){
    return this.form.get('B2').touched && this.form.get('B2').invalid;
  }

}

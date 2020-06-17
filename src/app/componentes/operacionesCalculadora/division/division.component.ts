import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from 'src/app/servicios/calculator.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  isLoading : boolean;
  requestError : boolean;
  requestSuccess : boolean;
  result : any;

  form : FormGroup;

  constructor(private fb : FormBuilder,
              private cs : CalculatorService) {
    this.crearForm();
  }

  ngOnInit() {
  }

  crearForm(){
    this.form = this.fb.group({
      p1k: [0, Validators.required],
      p1j: [0, Validators.required],
      p2k: [0, Validators.required],
      p2j: [0, Validators.required]
    })
  }

  dividir(){

    console.log("dividiendo..");

    this.isLoading = true;
    this.requestError = false;
    this.requestSuccess = false;
    this.result = '';

    let p1k = this.form.get('p1k').value;
    let p1j = this.form.get('p1j').value;
    let p2k = this.form.get('p2k').value;
    let p2j = this.form.get('p2j').value;

    this.cs.dividir(p1k, p1j, p2k, p2j)
    .subscribe( result=>{
      this.result = result['response'];
      this.requestSuccess = true;
      this.requestError = false;
      this.isLoading = false;
    }, (error)=>{
      this.requestError = true;
      this.requestSuccess = false;
      this.isLoading = false;
    })

  }

  get invalidP1k(){
    return this.form.get('p1k').touched && this.form.get('p1k').invalid;
  }

  get invalidP1j(){
    return this.form.get('p1j').touched && this.form.get('p1j').invalid;
  }

  get invalidP2k(){
    return this.form.get('p2k').touched && this.form.get('p2k').invalid;
  }

  get invalidP2j(){
    return this.form.get('p2j').touched && this.form.get('p2j').invalid;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  form : FormGroup;

  constructor( private fb : FormBuilder) {
    this.crearForm();
  }

  ngOnInit() {
  }


  crearForm(){
    this.form = this.fb.group({
      p1k: [],
      p1j: [],
      p2k: [],
      p2j: []
    })
  }

  restar(){
    console.log("restando.. xD");
  }
}

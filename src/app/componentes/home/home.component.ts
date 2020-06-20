import { Component, OnInit } from '@angular/core';
import { IntegrateService } from 'src/app/servicios/integrate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sumResp : string;

  constructor(private is : IntegrateService) {
    this.summary();
  }

  ngOnInit() {
  }

  summary(){
      this.is.summary().subscribe( result => {
        console.log("Respuesta del summar...")
        console.log(result)
      this.summary = result['response'];
    }, (error)=>{ 
      console.log('Error al intentar conectar al API, intentelo nuevamente.');
    })
  }

}

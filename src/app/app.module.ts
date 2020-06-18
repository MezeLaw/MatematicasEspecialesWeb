import { IntegrateService } from './servicios/integrate.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { CreadoresComponent } from './componentes/creadores/creadores.component'; 
import { PrimerOrdenComponent } from './componentes/primer-orden/primer-orden.component';
import { SegundoOrdenComponent } from './componentes/segundo-orden/segundo-orden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { Determinante2x2Component } from './componentes/operacionesCalculadora/determinante2x2/determinante2x2.component';
import { Determinante3x3Component } from './componentes/operacionesCalculadora/determinante3x3/determinante3x3.component';
import { SumaComponent } from './componentes/operacionesCalculadora/suma/suma.component';
import { MultiplicacionComponent } from './componentes/operacionesCalculadora/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './componentes/operacionesCalculadora/division/division.component';
import { RestaComponent } from './componentes/operacionesCalculadora/resta/resta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreadoresComponent, 
    PrimerOrdenComponent,
    SegundoOrdenComponent,
    CalculadoraComponent,
    SumaComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent,
    Determinante2x2Component,
    Determinante3x3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [IntegrateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

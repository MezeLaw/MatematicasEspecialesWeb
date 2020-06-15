import { IntegrateService } from './servicios/integrate.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { CreadoresComponent } from './componentes/creadores/creadores.component';
import { LaplacePrimerOrdenComponent } from './componentes/laplace-primer-orden/laplace-primer-orden.component';
import { LaplaceSegundoOrdenComponent } from './componentes/laplace-segundo-orden/laplace-segundo-orden.component';
import { PrimerOrdenComponent } from './componentes/primer-orden/primer-orden.component';
import { SegundoOrdenComponent } from './componentes/segundo-orden/segundo-orden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SumaComponent } from './componentes/suma/suma.component';
import { RestaComponent } from './componentes/resta/resta.component';
import { MultiplicacionComponent } from './componentes/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './componentes/division/division.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreadoresComponent,
    LaplacePrimerOrdenComponent,
    LaplaceSegundoOrdenComponent,
    PrimerOrdenComponent,
    SegundoOrdenComponent,
    CalculadoraComponent,
    SumaComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent
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

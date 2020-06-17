import { CreadoresComponent } from './componentes/creadores/creadores.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerOrdenComponent } from './componentes/primer-orden/primer-orden.component';
import { SegundoOrdenComponent } from './componentes/segundo-orden/segundo-orden.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { Determinante2x2Component } from './componentes/operacionesCalculadora/determinante2x2/determinante2x2.component';
import { Determinante3x3Component } from './componentes/operacionesCalculadora/determinante3x3/determinante3x3.component';
import { DivisionComponent } from './componentes/operacionesCalculadora/division/division.component';
import { MultiplicacionComponent } from './componentes/operacionesCalculadora/multiplicacion/multiplicacion.component';
import { RestaComponent } from './componentes/operacionesCalculadora/resta/resta.component';
import { SumaComponent } from './componentes/operacionesCalculadora/suma/suma.component';


const routes: Routes = [
  {path:"inicio", component : HomeComponent},
  {path:"creadores", component : CreadoresComponent},
  {path:"primerOrden", component : PrimerOrdenComponent},
  {path:"segundoOrden", component : SegundoOrdenComponent},
  {path:"calculadoraDeComplejos", component: CalculadoraComponent, 
    children:[
      { path: "suma", component: SumaComponent },
      { path: "resta", component : RestaComponent},
      { path: "multiplicacion", component : MultiplicacionComponent},
      { path: "division", component : DivisionComponent},
      { path: "determinante2x2", component : Determinante2x2Component},
      { path: "determinante3x3", component : Determinante3x3Component},
      { path: "**", pathMatch: "full", redirectTo: "suma"}
      
    ]},
  {path:"**", pathMatch: 'full', redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CreadoresComponent } from './componentes/creadores/creadores.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerOrdenComponent } from './componentes/primer-orden/primer-orden.component';
import { SegundoOrdenComponent } from './componentes/segundo-orden/segundo-orden.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SumaComponent } from './componentes/suma/suma.component';
import { RestaComponent } from './componentes/resta/resta.component';
import { MultiplicacionComponent } from './componentes/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './componentes/division/division.component';


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
      { path: "**", pathMatch: "full", redirectTo: "suma"}
      
    ]},
  {path:"**", pathMatch: 'full', redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
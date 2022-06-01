import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './busqueda/buscar/buscar.component';
import { GenerosComponent } from './generos/generos/generos.component';
import { HomeComponent } from './home/home/home.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'buscar', component:BuscarComponent},
  {path: 'generos', component:GenerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EjemConsumoComponent } from './components/ejem-consumo/ejem-consumo.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consumo', component: EjemConsumoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

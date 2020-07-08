import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MenuComponent } from './components/menu/menu.component';
import { CocinaComponent } from './components/cocina/cocina.component';



const rutas: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'ingreso',
    component: IngresoComponent
  },

  {
    path: 'menu',
    component: MenuComponent
  },

  {
    path: 'cocina',
    component: CocinaComponent
  },

]


@NgModule({
declarations:[],
imports: [RouterModule.forRoot(rutas)],
exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

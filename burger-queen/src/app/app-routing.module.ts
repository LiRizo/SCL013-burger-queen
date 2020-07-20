import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MenuComponent } from './components/menu/menu.component';
import { CocinaComponent } from './components/cocina/cocina.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { CheckComponent } from './components/check/check.component';

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

  {
    path: 'waiter',
    component: WaiterComponent
  },
  {
  path: 'check',
  component: CheckComponent
},

]


@NgModule({
declarations:[],
imports: [RouterModule.forRoot(rutas,{useHash:true})],
exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

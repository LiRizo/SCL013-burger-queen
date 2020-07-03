import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MenuComponent } from './components/menu/menu.component';
import { CocinaComponent } from './components/cocina/cocina.component';

import { RouterModule, Routes} from '@angular/router';

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
  declarations: [
    AppComponent,
    HomeComponent,
    IngresoComponent,
    MenuComponent,
    CocinaComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

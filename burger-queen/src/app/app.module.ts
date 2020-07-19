import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MenuComponent } from './components/menu/menu.component';
import { CocinaComponent } from './components/cocina/cocina.component';

import { AppRoutingModule } from './app-routing.module';
import { ConexionService } from './services/conexion.service';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderService } from './order.service';
import { MenuService } from './services/menu.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngresoComponent,
    MenuComponent,
    CocinaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ConexionService, OrderService, MenuService],
  bootstrap: [AppComponent]
})

export class AppModule { }

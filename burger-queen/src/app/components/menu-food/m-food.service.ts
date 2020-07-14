import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MFoodService {

  info: any= {};
  loaded=false;

  constructor(private http: HttpClient) {
console.log('servicio cliente');

   }
   mFood(){
    return this.http.get('../../assets/JSON/breakfast.json')
   }
}

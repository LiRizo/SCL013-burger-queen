import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MFoodService {
  info: any[] = [];
  loaded=false;

  constructor(private http: HttpClient) {

   }

  getProducts(): Observable  <any> {
    return this.http.get('/assets/JSON/data.json').pipe(
      map(result => result)
    )

  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Array<any>
  constructor() {
    this.order =[];
  }
}

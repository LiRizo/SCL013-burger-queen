import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {
  orders: any;

  constructor(public aM: OrderService) {
  this.aM.getTables(0).subscribe(order => {
    this.orders = order;
    console.log(this.orders)
  })
}

  ngOnInit(): void {
  }
  waiter(idTable: string){

  }

}

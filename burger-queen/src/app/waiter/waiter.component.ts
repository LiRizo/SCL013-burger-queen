import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  constructor(public aM: OrderService) {
    this.aM.getTables().subscribe(orders => {
      console.log(orders)
    })
  }

  ngOnInit(): void {
  }

  close(idTable: string){
    this.aM.closeTable(idTable);
    }

}

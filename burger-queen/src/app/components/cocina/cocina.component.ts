import { Component, OnInit } from '@angular/core';
import { KitchenService } from 'src/app/kitchen.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {

  constructor(public aM: KitchenService) {
  this.aM.getTables().subscribe(orders => {
    console.log(orders)
  })
}

  ngOnInit(): void {
  }

  waiter(idTable: string){
  this.aM.delivery(idTable);
  }

}

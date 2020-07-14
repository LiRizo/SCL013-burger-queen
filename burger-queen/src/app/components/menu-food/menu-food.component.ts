import { Component, OnInit } from '@angular/core';
import { MFoodService } from '../menu-food/m-food.service';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ['./menu-food.component.css']
})
export class MenuFoodComponent implements OnInit {
  look:boolean = false;
  look1:boolean = false;
  look2:boolean = false;
  look3:boolean = false;

  result :any[] = [];

  constructor(public food : MFoodService, public order: OrderService) {
    this.food.mFood()
    .subscribe(resp=> {
      this.result=resp["menu"]
      console.log(resp)
    })

   }

  ngOnInit(): void {
  }
  press(item){
    this.order.order.push(item)
  }
}

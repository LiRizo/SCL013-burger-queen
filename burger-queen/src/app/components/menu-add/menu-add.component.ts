import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { MFoodService } from 'src/app/components/menu-food/m-food.service';


@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

selectedProduct : Array<any> = [];

  constructor(public order:OrderService) {

  }

  ngOnInit(): void {
    this.selectedProduct=this.order.order;
  }

}

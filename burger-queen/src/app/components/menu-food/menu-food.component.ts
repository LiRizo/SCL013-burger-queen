import { Component, OnInit } from '@angular/core';
import { MFoodService } from '../menu-food/m-food.service';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ['./menu-food.component.css']
})
export class MenuFoodComponent implements OnInit {

  public menus: any[] = [];
  public products: any[] = [];
  public pedidos: any[] = [];
  public indexMenu: number = 0;
  public productos: number = 0;
  public cantidadProductos: number = 0;

  public mesaNumero: string = "001";

  constructor(public food : MFoodService, public order: OrderService) {
    this.food.getProducts()
    .subscribe(resp=> {
      this.menus=resp
      console.log(resp)
    })

   }

  ngOnInit(): void {
  }
  attach(i){
    this.order.order.push(i)
  }
  //esta variable es para llamar el menu en especifico con un btn, correspondiente
  getProducts(index): void {
    console.log(index)
    this.indexMenu = index;
    this.products = this.menus[index]['product']
    console.log(this.products)
  }

}

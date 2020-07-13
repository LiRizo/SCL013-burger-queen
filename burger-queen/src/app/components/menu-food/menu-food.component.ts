import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

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

  items: any;

  item: any = {
    client:'',
    table: 0,
    lot: 0,
    image: '',
    food: '',
    price: 0
  }

  constructor(private service:ConexionService) {
    this.service.listaItem().subscribe(item => {
      this.items = item;
      console.log(this.items)
    })
   }

  ngOnInit(): void {
  }
  attach(){
    this.service.attachItem(this.item);
    this.item.client = '';
    this.item.table = 0;
    this.item.food = '';
    this.item.price = 0;
   }
}

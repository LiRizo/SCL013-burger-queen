import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {
  items: any;

item: any = {
  client:'',
  tables: 0,
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
  clean(item){
    this.service.cleanItem(item);
    }
    attach(){
      this.service.attachItem(this.item);
      this.item.client = '';
      this.item.table = 0;
      this.item.food = '';
      this.item.price = 0;
     }
}

import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ConexionService } from 'src/app/services/conexion.service';
import { Table } from 'src/app/models/table.models';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menu: any[] = [];
  public products: any[] = [];
  public pedidos: any[] = [];
  public selectProduct: any[] = [];
  public sum: number = 0;
  public indexMenu: number = 0;
  public table: string;
  public client: string;


  constructor(private menuService: MenuService, public service: ConexionService) {
    menuService.getProducts().subscribe(
      (data) => {
        this.menu = data;
        this.getProduct(this.indexMenu);

      },
      (err) => {
        console.log(err);
      }
    );
    console.log('soy el menu');
  }

  getProduct(index: number) {
    this.products = this.menu[index]['product'];
    this.indexMenu = index;
  }

  addProduct(index: number) {
    this.selectProduct.push({
      id: this.products[index]['id'],
      count: 1,
      food: this.products[index]['food'],
      price: this.products[index]['price']
    });
    this.calculate();
  }

  delProduct(index: number) {
    this.selectProduct.splice(index, 1);
    this.calculate();
  }

  changeCount(index: number, count: number) {
    this.selectProduct[index].count += count;
    this.calculate();
  }

  calculate() {
    this.sum = 0;
    for (let product of this.selectProduct) {
      this.sum += product.count * product.price;
    }
  }
  attach(forma) {
    let sendTable: Table = {
    table: forma.value.table,
    client: forma.value.client,
    date: new Date().getTime(),
    state:0,
    products: this.selectProduct
    }
    this.service.attachItem(sendTable)
    .then(() => {
      this.selectProduct = [];
      this.calculate();
      console.log("paso")
    })

  }

  ngOnInit(): void {
  }
}

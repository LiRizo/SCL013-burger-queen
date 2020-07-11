import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

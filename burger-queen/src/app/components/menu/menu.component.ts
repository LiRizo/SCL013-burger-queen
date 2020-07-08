import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  look:boolean = false;
  look1:boolean = false;
  look2:boolean = false;
  look3:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}


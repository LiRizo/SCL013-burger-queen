import { Component, OnInit } from '@angular/core';
import { CheckService } from 'src/app/services/check.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(public aM: CheckService) {
    this.aM.getTables().subscribe(orders => {
      console.log(orders)
    })
   }

  ngOnInit(): void {
  }

}

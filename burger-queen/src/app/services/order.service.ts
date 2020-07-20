import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Table, TableResumen } from 'src/app/models/table.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private collectionOrder: AngularFirestoreCollection<Table>;
public listTables: Table[]= [];
  constructor(private aM:AngularFirestore) {

  }
  getTables(){
    this.collectionOrder=this.aM.collection<Table>('items',ref=>ref.where('state','==',1));
   //   this.collectionOrder=this.aM.collection<Table>('items');

    return this.collectionOrder.valueChanges({idField: 'eventId'}).pipe(
      map(orders => {
console.log(orders)
        this.listTables = [];
        for (const order of orders) {
          this.listTables.unshift(order);
        }
      })
    );
  }

  closeTable(id: string){
    this.collectionOrder.doc(id).update({state: 2});
  }

}


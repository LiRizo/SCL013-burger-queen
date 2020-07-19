import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderService } from 'src/app/order.service';
import { Table } from 'src/app/models/table.models';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private productDoc: AngularFirestoreDocument<Table>;
  private productsCollection: AngularFirestoreCollection<Table>;
  products: Observable<Table[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<Table>('items');
    this.products = this. productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Table;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listaItem(){
    return this.products;
  }
  attachItem( product: Table){
    console.log(product)
    this.productsCollection.add( product);
   }

}

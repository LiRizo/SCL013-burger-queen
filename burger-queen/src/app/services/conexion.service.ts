import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Table } from 'src/app/models/table.models';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
    private productsCollection: AngularFirestoreCollection<Table>;

  constructor(private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<Table>('items');
    }
  attachItem( product: Table){
    console.log(product)
    return this.productsCollection.add( product);
   }

}

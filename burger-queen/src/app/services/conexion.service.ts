import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  client: string;
  table: number;
  lot: number;
  image: string;
  food: string;
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemDoc: AngularFirestoreDocument<Item>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listaItem(){
    return this.items;
  }
  attachItem( item: Item){
    this.itemsCollection.add(item);
   }
   cleanItem(item){
     this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
     this.itemDoc.delete();
   }

}

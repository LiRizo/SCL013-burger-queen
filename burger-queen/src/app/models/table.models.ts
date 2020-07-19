export interface Table {
  eventId?:string;
  id?: string;
  client: string;
  date: number;
  table: string;
  state: number;
  products: TableResumen[];
}

export interface TableResumen {
  id: string;
  food: string;
  price: number;
  count: number;
}

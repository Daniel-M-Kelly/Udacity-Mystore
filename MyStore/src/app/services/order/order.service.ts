import { Injectable } from '@angular/core';
import { Order } from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
 
  orderContents: Order = new Order;

  getOrder(): Order {
	  return this.orderContents;
  }

  addOrder( order:Order ): void {
	  this.orderContents = order;
  }

  clearOrder(): void {
	  this.orderContents = new Order;
  }
}

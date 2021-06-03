import { Injectable } from '@angular/core';
import { Product } from './components/product-list/product-list.component'
@Injectable({
  providedIn: 'root'
})
export class CartService {
	cartContents: object[] = [];

  constructor() { }

  getCart() {
	return this.cartContents;
  }
  
  addToCart(product: Product) {
	  this.cartContents.push(product);
	  return this.cartContents;
  }
}

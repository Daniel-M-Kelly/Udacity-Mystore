import { Injectable } from '@angular/core';
import { Product } from './product.service';

export type CartItem = {
	product: Product,
	quantity: number
}


@Injectable({
	providedIn: 'root'
})
export class CartService {

	constructor() { }

	cartContents: CartItem[] = [];

	getCart(): CartItem[] {
		return this.cartContents;
	}

	addToCart(cartItem: CartItem): CartItem[]{
		alert(`${cartItem.quantity} ${cartItem.product.name} has been added to the cart!`);
		this.cartContents.push(cartItem);
		return this.cartContents;
	}
}
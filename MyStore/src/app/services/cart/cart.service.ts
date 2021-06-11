import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

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
		if (this.cartContents.length) {
			if (this.cartContents.some(item => item['product']['id'] === cartItem['product']['id'])) {
				alert(`${cartItem.product.name} is already in cart.`);
			}
			else {
				alert(`${cartItem.quantity} ${cartItem.product.name} has been added to the cart with items in it!`);
					this.cartContents.push(cartItem);
					}
		} else {
			alert(`${cartItem.quantity} ${cartItem.product.name} has been added to the empty cart!`);
			this.cartContents.push(cartItem);
		}
		return this.cartContents;
	}

	removeFromCart(cartItem: CartItem): CartItem[] {
		this.cartContents = this.cartContents.filter(item => item.product.id != cartItem.product.id);
		return this.cartContents;
	}
	
	clearCart():void{
		this.cartContents = [];
	}
}
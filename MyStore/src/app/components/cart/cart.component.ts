import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../models/cartItem';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	cartContents: CartItem[] = [];
	cartTotal: number = 0;
	order: Order = new Order;

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
	this.cartContents = this.cartService.getCart();
	this.cartSum()

  }

  cartSum(): void {
	let total: number = 0;
	this.cartContents.forEach(x => total += (x.product.price * x.quantity));
	this.cartTotal = total.toFixed(2) as unknown as number;
  }

  onChange(cartItem: CartItem): void {
	if (cartItem.quantity <= 0) {
		alert(`Item Removed from Cart`);
		this.cartContents = this.cartService.removeFromCart(cartItem);
		this.cartSum();
	} else {
		this.cartSum();
	}
  } 

  onSubmit(fullName: string, address: string, ccNum: number, cartContents: CartItem[], cartTotal: number): void {
	  this.order = {fullName: fullName, address: address, ccNum: ccNum, total: cartTotal, cart: cartContents};
	  this.orderService.addOrder(this.order);
	  this.router.navigate(['/confirmation']);
  }
}


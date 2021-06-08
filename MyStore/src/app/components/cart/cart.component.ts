import { Component, OnInit, EventEmitter } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	cartContents: CartItem[] = [];
	cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
	this.cartContents = this.cartService.getCart();
	this.cartTotal = this.cartSum();

  }

  cartSum(): number {
	let total: number = 0;
	this.cartContents.forEach(x => total += (x.product.price * x.quantity));
	return total;
  }
}


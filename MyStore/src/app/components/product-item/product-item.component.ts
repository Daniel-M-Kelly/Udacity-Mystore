import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../cart.service';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
	@Input() product: Product;
	@Input() quantity: number;

  constructor(private cartService: CartService) {
	this.product = {
		id: 0,
		name: '',
		price: 0,
		url: '',
		description: ''
	}
	this.quantity = 0;
   }

  ngOnInit(): void {
  }

  onSubmit(product: Product, quantity: number): void {
	  const cartItem: CartItem = {product, quantity}
	  this.cartService.addToCart(cartItem);
  }

}

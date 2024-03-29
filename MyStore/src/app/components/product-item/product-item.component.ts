import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
	@Input() product: Product;
	@Input() quantity: number;
	@Output() added = new EventEmitter();

  constructor(private cartService: CartService) {
	this.product = new Product;
	this.quantity = 0;

   }

  ngOnInit(): void {
  }

  /* onSubmit(product: Product, quantity: number): void {
	  const cartItem: CartItem = {product, quantity}
	  this.cartService.addToCart(cartItem);
  } */


}

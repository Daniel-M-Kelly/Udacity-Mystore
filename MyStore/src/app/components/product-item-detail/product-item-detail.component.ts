import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product/product.service';
import { ActivatedRoute, Params } from "@angular/router";
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../models/cartItem';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {
	productlist: Product[] = [];
	productId: Params = {};
	product: Product = {
		id: 0,
		name: '',
		price: 0,
		url: '',
		description: ''
	};

	cartItem: CartItem = {
		product: this.product,
		quantity: 0
	}


  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
	  this.route.params.subscribe( params => this.productId = params)
   }

  ngOnInit(): void {
	  this.productService.getProducts().subscribe(data => {
		this.productlist = data;
		this.product = this.productlist.filter(prod => {
			return prod.id == this.productId.id;
		})[0];
	  });
  }

  onSubmit(product: Product, quantity: number): void {
	const cartItem: CartItem = {product, quantity}
	this.cartService.addToCart(cartItem);
}

}

import { Component, OnInit } from '@angular/core';
import { ProductService, Product} from '../../product.service';
import { CartService, CartItem } from '../../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
	productlist: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { 
  }

  ngOnInit(): void {
	 this.productService.getProducts().subscribe(data => {
		  this.productlist = data;
	  }) 
	

  }
}

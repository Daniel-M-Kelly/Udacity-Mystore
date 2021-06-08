import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../product.service';
import { Product } from '../../models/product';
import { CartService } from '../../cart.service';
import { CartItem } from '../../models/cartItem';

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

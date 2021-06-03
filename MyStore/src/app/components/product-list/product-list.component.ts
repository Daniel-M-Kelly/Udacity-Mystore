import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProductService} from '../../product.service';

export type Product = {
	id?: number;
	name: string;
	price: number;
	url: string;
	description: string;
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
	productlist: Product[] = [];

  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
	 this.productService.getProducts().subscribe(data => {
		  this.productlist = data;
	  })
  }


}

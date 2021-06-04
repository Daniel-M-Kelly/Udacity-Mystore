import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Product = {
	id: number;
	name: string;
	price: number;
	url: string;
	description: string;
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<[]> {
	return this.http.get<[]>('assets/data.json');
  }

}

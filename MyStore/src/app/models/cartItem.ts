import { Product } from './product';

export class CartItem {
	product: Product;
	quantity: number;

	constructor() {
		this.product = {
			id: 1,
			name: '',
			price: 0,
			url: '',
			description: '',
			};
		this.quantity = 1;
	}

}

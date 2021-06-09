import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from '../../services/order/order.service';
import { CartService } from '../../services/cart/cart.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
	
	order: Order = new Order;

  constructor(private orderService: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
	  this.order = this.orderService.getOrder();
  }

  onClick():void {
	this.orderService.clearOrder();
	this.cartService.clearCart();
	alert('Order & Cart Cleared');
  }

}

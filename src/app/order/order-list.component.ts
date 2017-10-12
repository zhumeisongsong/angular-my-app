import{Component, Input, OnInit, OnChanges} from '@angular/core';

import {OrderService} from './order.service';

import {Order} from './order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent implements OnInit {
  @Input() state: any;
  orderId:any;
  orders: Order[] = [];

  constructor(private orderService: OrderService,) {
  }

  ngOnInit() {
    this.orderService.getOrders(1)
      .then(orders => {
        console.log(orders);
        this.orderService.getOrder(1)
          .then(order=>{
            console.log(order);
          });
        // this.orders=orders;
      });
  }
}

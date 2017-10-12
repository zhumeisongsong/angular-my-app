import{Component, Input, OnInit, OnChanges} from '@angular/core';

import {OrderService} from './order.service';

import {Order} from './order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent implements OnInit {
  @Input('state') state: any;
  orders: Order[] = [];

  constructor(private orderService: OrderService,) {
  }

  // ngOnChanges(state:any) {
  //   console.log(this.state);
  //   //string 改id
  //   this.orderService.getOrders(0)
  //     .then(orders => {
  //       console.log(orders);
  //       this.orders = orders;
  //     });
  // }

  ngOnInit() {
    console.log(this.state);
    this.orderService.getOrders(0)
      .then(orders => {
        console.log(orders);
        this.orders = orders;
      });
  }
}

import 'rxjs/add/operator/switchMap';
import{Component, OnInit} from '@angular/core';

import {OrderTab} from './order-tab';
import {OrderTabService} from './order-tab.service';
import {OrderService} from './order.service';

import {Order}from'./order';

@Component({
  selector: 'order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss']
})

export class OrderTabComponent implements OnInit {
  navs: OrderTab[] = [];
  orders: Order[] = [];
  private selectedState: any = localStorage.getItem('orderState') || 1;

  constructor(private navService: OrderTabService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.navService.getOrderTab()
      .then(navs => {
        this.navs = navs;
        this.getOrderList(this.selectedState);
      });
  }

  onSelect(state: any): void {
    this.selectedState = state;
    this.getOrderList(state)
  }

  getOrderList(state: any): void {
    this.orderService.getOrders(state)
      .then(orders => {
        this.orders = orders;
        console.log(orders);
        // this.orderService.getOrder(1)
        //   .then(order=>{
        //     console.log(order);
        //   });
        // this.orders=orders;
      });
  }
}

import{Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderService} from './order.service';

import {Order} from './order';

@Component({
  selector: 'order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss',]
})

export class OrderConfirmComponent implements OnInit {
  hasDefaultAddress: boolean;
  stateFlag: boolean;
  idList: any;

  order: Order = {
    orderId: 1,
    userId: 0,
    orderState: 1,
    totalPrice: 0,
    totalCount: 10,
    // consignee: "smm",
    // province: 22,
    // city: 33,
    // district: 18,
    // address: "333333",
    // mobile: "18108272714",
  };

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.idList = localStorage.getItem('productId');

    if (this.idList) {
      this.stateFlag = false;
      localStorage.removeItem('productId');//remove id
    } else {
      this.router.navigate(['/product'])
    }
  }

  // getUserId() {
  //   let user = '1';
  //   localStorage.set('userId', user);
  //
  //   let userId = localStorage.getItem('userId');
  //   console.log(userId);
  //   return userId;
  // }

  //get userId&token search user default address
  getDefaultAddress() {
    this.hasDefaultAddress = false;
  }

  orderTotal(order) {
    this.order.totalCount = order.count;
    this.order.totalPrice = order.price;
  }

  orderConfirm() {
    this.orderService.getOrders()
      .then(orders => {
        console.log(orders);
      });
    this.orderService.create(this.order)
      .then(order => {
        console.log(order);
        // this.orders.push(order);
        // this.selectedHero = null;
      });

    //pay2 nopay1
    // this.router.navigate(['/order']);
  }

}

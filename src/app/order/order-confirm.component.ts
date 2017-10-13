import{Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderService} from './order.service';
import {OrderPdListService} from './order-pd-list/order-pd-list.service';

import {Order} from './order';
import {Product} from '../product/product';

@Component({
  selector: 'order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss',]
})

export class OrderConfirmComponent implements OnInit {
  hasDefaultAddress: boolean;
  stateFlag: boolean;
  idList: any;
  private pds: any;

  order: Order = {
    id: 0,
    userId: 0,
    orderState: 1,
    totalPrice: 0,
    totalCount: 0,
  };

  constructor(private orderService: OrderService,
              private orderPdListService: OrderPdListService,
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
    this.pds = order.products;
  }

  orderConfirm() {
    this.orderService.getOrders()//order id rec

      .then(orders => {
        this.order.id = orders.length + 1;
        this.order.userId = +localStorage.getItem('userId') | 1;
        this.order.orderState = 1;

        this.orderService.create(this.order)
          .then((order) => {
            const orderId = order.id;
            this.createOrderPds(orderId)
          });
      });

    //pay2 nopay1
    // this.router.navigate(['/order']);
  }

  createOrderPds(orderId: number) {
    this.orderPdListService.ordersPds()
      .then((pds) => {
        let length = pds.length;
        console.log(length);

        for (let pd of this.pds) {
          pd.orderId = orderId;

          let id = length + 1;
          pd.id = id;
          console.log(pd.id);
          this.orderPdListService.create(pd)
            .then((product) => {
              this.router.navigate(['/order']);
              length++;
            })
        }
      })
  }

}

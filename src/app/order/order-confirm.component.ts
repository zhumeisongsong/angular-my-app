import{Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderService} from './order.service';

import {Order} from './order';

@Component({
  selector: 'order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-pd-list.component.scss', './order-confirm.component.scss',]
})

export class OrderConfirmComponent implements OnInit {
  hasDefaultAddress: boolean;
  stateFlag: boolean;
  idList: any;

  orderData: Order;

  order: any = {
    count: "",
    price:""
  };

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
    this.idList = localStorage.getItem('productId');

    if (this.idList) {
      this.renderData();
      // localStorage.removeItem('productId');//remove id
    } else {
      this.router.navigate(['/product'])
    }
  }

  getUserId() {
    let user = '1';
    localStorage.set('userId', user);

    let userId = localStorage.getItem('userId');
    console.log(userId);
    return userId;
  }

  //get userId&token search user default address
  getDefaultAddress() {
    this.hasDefaultAddress = false;
  }

  renderData() {
    this.stateFlag = false;
  }

  orderTotal(order) {
    this.order.count = order.count;
    this.order.price = order.price;
  }

  orderConfirm() {
    console.log(this.orderData);
    this.orderService.confirm(this.orderData)
  }

}

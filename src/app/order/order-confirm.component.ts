import{Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import{ProductService}from '../product/product.service';
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
  orderData:Order;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private router: Router) {
  }

  getUserId() {
    let user = '1';
    localStorage.set('userId', user);

    let userId = localStorage.getItem('userId');
    console.log(userId);
    return userId;
  }

  //取userId 查询有没有default address
  getDefaultAddress() {
    this.hasDefaultAddress = false;
  }

  renderData() {
    this.stateFlag = false;
  }

  ngOnInit() {
    this.idList = localStorage.getItem('productId');

    if (this.idList) {
      this.renderData();
      // localStorage.removeItem('productId');//请id
    } else {
      this.router.navigate(['/product'])
    }
  }

  orderConfirm(){
    console.log(this.orderData);
    this.orderService.confirm(this.orderData)
  }

}

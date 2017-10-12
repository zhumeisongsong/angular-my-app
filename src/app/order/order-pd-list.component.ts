import {Component, Input, OnInit} from '@angular/core';

import{ProductService}from '../product/product.service';
import {OrderService} from "./order.service";

import {Product} from '../product/product';

@Component({
  selector: 'order-pd',
  templateUrl: 'order-pd-list.component.html',
  styleUrls: ['order-pd-list.component.scss']
})

export class OrderPdListComponent implements OnInit {
  @Input('stateFlag') stateFlag: boolean;
  @Input('idList') idList: any;
  products: Product[] = [];


  constructor(private productService: ProductService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    //products cyclic fetch
    this.productService.getProduct(this.idList)
      .then(product => {
        console.log(product);
        this.products.push(product)
      });

  }

}

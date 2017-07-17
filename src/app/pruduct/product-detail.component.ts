import {Component, Input, OnInit}   from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ProductService }              from './product.service';

import { Product }                     from './product';

import 'rxjs/add/operator/switchMap';

//定义一个组件
@Component({
  //@Component装饰器为组件提供Angular元数据
  selector:'pd-detail',
  templateUrl:'./product-detail.component.html',
  styleUrls:['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  @Input() product:Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {};
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
}

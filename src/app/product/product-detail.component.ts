import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ProductService} from './product.service';

import {Product} from './product';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'pd-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})

export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  };

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }
}

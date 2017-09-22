import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit, HostBinding, Output} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {ProductService} from './product.service';

import {Product} from './product';

// import {slideInDownAnimation} from '../animations';

@Component({
  selector: 'pd-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  // animations:[slideInDownAnimation],
})

export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.position')  position = 'relative';

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  };

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
      .subscribe(product => {
        this.product = product
      });
  }
}

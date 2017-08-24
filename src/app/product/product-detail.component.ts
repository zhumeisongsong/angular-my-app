import {Component, Input, OnInit, HostBinding} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ProductService} from './product.service';

import {Product} from './product';

import 'rxjs/add/operator/switchMap';

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

  ngOnInit(): void {
    console.log(this.route);
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }
}

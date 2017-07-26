import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pd-list',
  templateUrl: './product-list.component.html',
  styleUrls:[ './product-list.component.scss' ]
})

export class ProductListComponent {
  products:Product[]=[];

  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.productService.getProducts()
      .then(products=>this.products=products);
  }
}

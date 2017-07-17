import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pd-list',
  templateUrl: './list.component.html',
  styleUrls:[ './list.component.scss' ]
})

export class ListComponent {
  products:Product[]=[];

  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.productService.getProducts()
      .then(products=>this.products=products);
  }
}

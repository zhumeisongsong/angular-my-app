import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pd-list',
  templateUrl: './product-list.component.html',
  styleUrls:[ './product-list.component.scss' ],
})

export class ProductListComponent implements OnInit{
  products:Product[]=[];

  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getProducts()
      .then(products=>{
        this.products=products
      });
  }
}

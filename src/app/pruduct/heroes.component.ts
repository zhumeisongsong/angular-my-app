import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  products: Product[];//英雄列表数据
  selectedProduct: Product;//点击选择器 暴露英雄

  constructor(
    private router: Router,
    private productService: ProductService) {}

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(hero: Product): void {
    this.selectedProduct = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

}

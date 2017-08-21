import {Injectable} from '@angular/core';

import {Product} from './product';
import {PRODUCTS} from './mock-list';

@Injectable()//必须写括号

export class ProductService {

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }//stub

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.pdId === id));
  }
}

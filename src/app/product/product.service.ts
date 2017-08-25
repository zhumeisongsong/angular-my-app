import {Injectable} from '@angular/core';
import{Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';//Angular 的Observable并没有一个toPromise操作符

import {Product} from './product';

@Injectable()//必须写括号
export class ProductService {
  private header = new Headers({
    'Content-Type': 'application/json'
  });
  private productUrl = 'api/products';// URL to web api

  constructor(private http: Http) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productUrl)
      .toPromise()//返回的是RxJS的Observable可观察对象
      .then(response => response.json().data as Product[])
      .catch(this.handleError);

  }//stub

  private handleError(error: any): Promise<any> {
    console.error('AN error occurred', error);//TODO:just for demo error meg
    return Promise.reject(error.message || error);
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);

    // return this.getProducts()
    //   .then(products => products.find(product => product.pdId === id));
  }
}

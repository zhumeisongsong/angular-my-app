import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';//Angular Observable object has no toPromise operator

import {Product} from './product';

@Injectable()

export class ProductService {

  private header = new Headers({
    'Content-Type': 'application/json'
  });
  private productUrl = '/index.php/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productUrl)
      .toPromise()//返回的是RxJS的Observable可观察对象
      .then(response => response as Product[])
      .catch(this.handleError);
  }//stub

  getProduct(id: number): Promise<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //TODO:just for demo error meg
    console.error('An error occurred');
    return Promise.reject(error.message || error);
  }
}

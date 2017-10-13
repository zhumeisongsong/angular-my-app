import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Product} from '../../product/product';


@Injectable()

export class OrderPdListService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private pdUrl = 'api/orderPds';

  constructor(private http: Http) {
  }

  create(product: object): Promise<Product> {
    return this.http
      .post(this.pdUrl, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(()=>null)
      .catch(this.handleError);
  }

  getOrderPds(orderId: number): Promise<Product[]> {
    const url = `${this.pdUrl}?orderId=${orderId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  ordersPds(): Promise<Product[]> {
    return this.http.get(this.pdUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

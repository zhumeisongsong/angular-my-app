import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Order} from './order';

@Injectable()

export class OrderService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private orderUrl = 'api/orders';

  constructor(private http: Http) {
  }

  addOrder(order: object): Promise<Order> {
    console.log(JSON.stringify(order));
    return this.http
      .post(this.orderUrl, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Order)
      .catch(this.handleError);
  }

  getOrders(state: number): Promise<Order[]> {
    const url = `${this.orderUrl}/1`;
    return this.http.get(url)
      // .post(this.orderUrl, JSON.stringify(state), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Order[])
      .catch(this.handleError);
  }

  getOrder(id: number): Promise<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Order)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  changeState(order: Order): Promise<Order[]> {
    const url = `${this.orderUrl}/${order.orderId}`;
    return this.http
      .post(this.orderUrl, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(() => order)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

import {Injectable} from '@angular/core';

import {OrderNav} from './order-nav';
import {ORDERNAVS} from './mock-order-nav';

import {Order} from './order';
import {ORDERS} from './mock-order';

let navsPromise = Promise.resolve(ORDERNAVS);
let ordersPromise = Promise.resolve(ORDERS);
@Injectable()
export class OrderService {

  getOrderNavs() {
    return navsPromise;
  }


  // getOrders(status:string):Promise<Order>{
  //   // return this.getOrders()
  //   //   .tnen(order=>order)
  // }
  //
  //
  // getOrder(id:number):Promise<Order>{
  //   return this.getOrders()
  //     .then(orders=>orders.find(order=>order.odId ===id));
  // }

}

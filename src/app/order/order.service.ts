import {Injectable} from '@angular/core';

import {Order} from './order';
import {ORDERS} from './mock-order';
let ordersPromise = Promise.resolve(ORDERS);

@Injectable()
export class OrderService {

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

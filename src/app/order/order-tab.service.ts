import {Injectable} from '@angular/core';

import {ORDERTABS} from './mock-order-tabs';

let navsPromise = Promise.resolve(ORDERTABS);

@Injectable()
export class OrderTabService {

  getOrderTab() {
    return navsPromise;
  }

}

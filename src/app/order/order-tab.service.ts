import {Injectable} from '@angular/core';

import {ORDERTABS} from './order-tab';

let navsPromise = Promise.resolve(ORDERTABS);

@Injectable()
export class OrderTabService {

  getOrderTab() {
    return navsPromise;
  }

}

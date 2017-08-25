import {Injectable} from '@angular/core';

import {OrderNav} from './order-nav';
import {ORDERNAVS} from './mock-order-nav';

let navsPromise = Promise.resolve(ORDERNAVS);

@Injectable()
export class OrderNavService {

  getOrderNavs() {
    return navsPromise;
  }

}

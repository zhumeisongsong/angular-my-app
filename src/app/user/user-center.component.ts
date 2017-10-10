import 'rxjs/add/operator/switchMap';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {OrderTab} from '../order/order-tab';
import {OrderTabService} from '../order/order-tab.service';

@Component({
  selector: 'user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
})

export class UserCenterComponent implements OnInit {
  navs: OrderTab[] = [];

  constructor(private navService: OrderTabService,
              private router: Router) {
  }

  ngOnInit() {
    this.navService.getOrderTab()
      .then(navs => {
        this.navs = navs;
        console.log(navs)
      });
  }

  orderList(state: string) {
    console.log(state)
    this.router.navigate(['/order'])
  }


}

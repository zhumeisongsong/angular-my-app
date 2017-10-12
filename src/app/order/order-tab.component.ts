import 'rxjs/add/operator/switchMap';
import{Component, OnInit} from '@angular/core';

import {OrderTab} from './order-tab';
import {OrderTabService} from './order-tab.service';
import {OrderService} from './order.service';

@Component({
  selector: 'order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss']
})

export class OrderTabComponent implements OnInit{

  navs: OrderTab[] = [];
  state: string;
  selectedState = localStorage.getItem('orderState');

  constructor(private navService: OrderTabService,) {
  }

  ngOnInit() {
    this.navService.getOrderTab()
      .then(navs => {
        this.navs = navs;
      });
    this.state = this.selectedState;
  }

  onSelect(state: string): void {
    localStorage.setItem('orderState', state);
    let activeState = localStorage.getItem('orderState');
    this.selectedState = activeState;
  }
}

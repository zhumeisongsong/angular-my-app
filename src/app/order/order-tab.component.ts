import 'rxjs/add/operator/switchMap';
import{Component, OnInit, AfterContentInit, ContentChildren, QueryList} from '@angular/core';

import {OrderTab} from './order-tab';
import {OrderTabService} from './order-tab.service';
import {OrderService} from './order.service';

@Component({
  selector: 'order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss']
})

export class OrderTabComponent implements OnInit, AfterContentInit {
  navs: OrderTab[] = [];

  constructor(private navService: OrderTabService,) {
  }

  // isSelected(orderNav: OrderNav) {
  //   return orderNav.text === this.selectedStatus;
  // }

  ngOnInit() {
    this.navService.getOrderTab()
      .then(navs => {
        this.navs = navs;
        console.log(navs)
      });
  }

  ngAfterContentInit() {

  }


  // @ContentChildren(OrderListComponent) tabs: QueryList<OrderListComponent>;
  //
  // tabClicked(activeTab){
  //   const tabs = this.tabs.toArray();
  //   tabs.forEach(tab=>tab.active=false);
  //   activeTab.active=true;
  // }

  // onSelect(status:text){
  //   this.selectedStatus =
  //
  // }
}

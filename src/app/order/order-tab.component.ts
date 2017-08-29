import 'rxjs/add/operator/switchMap';
import{Component, OnInit, AfterContentInit,ContentChildren, QueryList} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";

//order nav
import {OrderTab} from './order-tab';
import {OrderTabService} from './order-tab.service';

import {OrderService} from './order.service';
import {OrderListComponent} from "./order-list.component";
//根据关键字 查询出列表

@Component({
  selector: 'order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss','./order-pd-list.scss']
})

export class OrderTabComponent implements AfterContentInit {
  // navs: OrderTab[] = [];
  //
  // constructor(private navService: OrderTabService,
  //             private route: ActivatedRoute,
  //             private router: Router) {
  // }
  //
  // // isSelected(orderNav: OrderNav) {
  // //   return orderNav.text === this.selectedStatus;
  // // }
  //
  ngAfterContentInit() {
    // this.navService.getOrderTab()
    //   .then(navs => {
    //     this.navs = navs;
    //   });

  }
  //
  // @ContentChildren(OrderListComponent) tabs: QueryList<OrderListComponent>;
  //
  // tabClicked(activeTab){
  //   const tabs = this.tabs.toArray();
  //   tabs.forEach(tab=>tab.active=false);
  //   activeTab.active=true;
  // }
  //
  // // onSelect(status:text){
  // //   this.selectedStatus =
  // //
  // // }
}

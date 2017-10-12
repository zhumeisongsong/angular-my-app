import{Component, Input, OnInit, OnChanges} from '@angular/core';

import {OrderService} from './order.service';

import {Order} from './order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent implements OnInit {
  @Input() state: any;
  orderId:any;
  @Input()orders: Order[] = [];

  constructor(private orderService: OrderService,) {
  }

  ngOnInit() {

    console.log(this.orders);
  }
}

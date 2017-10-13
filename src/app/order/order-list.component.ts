import{Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import {OrderService} from './order.service';

import {Order} from './order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent implements OnInit {
  @Input() state: any;
  @Input() orders: Order[] = [];

  @Output() orderStateChange = new EventEmitter<any>();

  constructor(private orderService: OrderService,) {
  }

  ngOnInit() {
  }

  changeState(order: Order, state: number) {
    this.orderStateChange.emit(state);

    let id = order.id;
    order.orderState = state;

    this.orderService.updateState(order, id)
      .then(() => {
        this.refreshOrderList(state);
      })
  }

  cancel(id: number) {
    this.orderService.delete(id)
      .then(() => {
          this.refreshOrderList(this.state);
        }
      )
  }

  refreshOrderList(state: any): void {
    this.orderService.getOrders(state)
      .then(orders => {
        this.orders = orders
      })
  }

}

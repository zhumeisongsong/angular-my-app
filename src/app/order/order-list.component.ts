import{Component, Input, OnInit} from '@angular/core';

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

  constructor(private orderService: OrderService,) {
  }

  ngOnInit() {
  }

  changeState(order:Order,state:number) {
    let id =order.id;
    order.orderState =state;
    this.orderService.updateState(order,id)
      .then()
  }

  cancel(id: number) {
    this.orderService.delete(id)
      .then(() => {
      console.log(this.state);
          this.orderService.getOrders(this.state)
            .then(orders=>{
              this.orders=orders
            })
        }
      )
  }

}

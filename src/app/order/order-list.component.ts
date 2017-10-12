import{Component, Input, OnInit} from '@angular/core';

import {Order} from './order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent implements OnInit {
  @Input('state') state: string;

  ngOnInit() {
    console.log(this.state)
  }
}

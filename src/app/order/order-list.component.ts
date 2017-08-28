import{Component, Input} from '@angular/core';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent {
  @Input() active = false;
}

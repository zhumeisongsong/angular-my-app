import{Component,OnInit} from '@angular/core';

@Component({
  selector: 'order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-pd-list.component.scss','./order-confirm.component.scss',]
})

export class OrderConfirmComponent implements OnInit{
  hasDefaultAddress:boolean;
  //取userId 查询有没有default address

  ngOnInit(){
    this.hasDefaultAddress=false;
  }

}

import 'rxjs/add/operator/switchMap';
import{Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";

import {OrderNav} from './order-nav';
import {OrderService} from './order.service';

@Component({
  selector: 'order-nav',
  templateUrl: './order-nav.component.html',
  styleUrls: ['./order-nav.component.scss']
})

export class OrderNavComponent implements OnInit {
  navs: OrderNav[]=[];
  selectedStatus: number;


  constructor(private service: OrderService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  // isSelected(orderNav: OrderNav) {
  //   return orderNav.text === this.selectedStatus;
  // }

  ngOnInit() {
    // this.service.getOrderNavs();
    // this.navs = this.route.ParamMap
    //   .switchMap((params: ParamMap) => {
    //     // this.selectedStatus = +params.get('name');
    //     // return
    //   });
    this.service.getOrderNavs()
      .then(navs=>{
        this.navs=navs;
        console.log(navs);
      });
  }

  // onSelect(status:text){
  //   this.selectedStatus =
  //
  // }

  // ngOnInit() {
  //   this.crises = this.route.paramMap
  //     .switchMap((params: ParamMap) => {
  //       this.selectedId = +params.get('id');
  //       return this.service.getCrises();
  //     });
  // }
  //
  // onSelect(crisis: Crisis) {
  //   this.selectedId = crisis.id;
  //
  //   // Navigate with relative link
  //   this.router.navigate([crisis.id], { relativeTo: this.route });
  // }
}

import 'rxjs/add/operator/switchMap';
import{Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";

//order nav
import {OrderNav} from './order-nav';
import {OrderNavService} from './order-nav.service';

import {OrderService} from './order.service';

@Component({
  selector: 'order-nav',
  templateUrl: './order-nav.component.html',
  styleUrls: ['./order-nav.component.scss']
})

export class OrderNavComponent implements OnInit {
  navs: OrderNav[]=[];
  selectedStatus: number;


  constructor(private navService: OrderNavService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  // isSelected(orderNav: OrderNav) {
  //   return orderNav.text === this.selectedStatus;
  // }

  ngOnInit() {
    this.navService.getOrderNavs()
      .then(navs=>{
        this.navs=navs;
      });
  }

  // this.service.getOrderNavs();
  // this.navs = this.route.ParamMap
  //   .switchMap((params: ParamMap) => {
  //     // this.selectedStatus = +params.get('name');
  //     // return
  //   });

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

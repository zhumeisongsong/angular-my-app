import{Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/finally';

import {Address}from './address';
import {AddressService} from './address.service';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})

export class AddressListComponent implements OnInit {
  @Output() onNavShowed = new EventEmitter<boolean>();
  navShowed = false;


  addresses: Observable<Address[]>;

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    // this.isLoading = true;
    this.addresses = this.addressService.getAddresses();
  }


}

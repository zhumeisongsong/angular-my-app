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
  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.getAddresses();
  }

  addresses: Observable<Address[]>;
  getAddresses() {
    this.addresses = this.addressService.getAddresses();
  }


}

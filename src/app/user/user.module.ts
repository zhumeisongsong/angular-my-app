import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserComponent} from './user.component';
import {UserCenterComponent} from './user-center.component';

import {AddressListComponent} from './address/address-list.component';
import {AddressDetailComponent} from './address/address-detail.component';

import {UserService} from './user.service';
import {AddressService} from './address/address.service';

import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserCenterComponent,
    AddressListComponent,
    AddressDetailComponent
  ],
  exports: [
    UserCenterComponent,
  ],
  providers: [
    UserService,
    AddressService
  ]
})

export class UserModule {
}

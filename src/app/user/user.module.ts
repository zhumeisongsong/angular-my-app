import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserComponent} from './user.component';
import {UserCenterComponent} from './user-center.component';
import {AddressListComponent} from './address-list.component';
import {SignInComponent} from './sign-in.component';

import {UserService} from './user.service';
import {AddressService} from './address.service';

import {UserRoutingModule} from "./user-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserCenterComponent,
    AddressListComponent,
    SignInComponent
  ],
  exports: [],
  providers: [
    UserService,
    AddressService
  ]
})

export class UserModule {
}

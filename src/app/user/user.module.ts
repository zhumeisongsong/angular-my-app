import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserComponent} from './user.component';
import {UserCenterComponent} from './user-center.component';
import {SignInComponent} from './sign-in.component';

import {OrderNavService} from '../order/order-nav.service';
import {UserService} from './user.service';

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
    SignInComponent
  ],
  exports: [],
  providers: [
    OrderNavService,
    UserService
  ]
})

export class UserModule {
}

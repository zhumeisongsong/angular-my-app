import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserComponent} from './user.component';
import {UserCenterComponent} from './user-center.component';
import {SignInComponent} from './sign-in.component';

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
    UserService
  ]
})

export class UserModule {
}

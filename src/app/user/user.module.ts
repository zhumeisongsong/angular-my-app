import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserCenterComponent} from './user-center.component';
import {SignInComponent} from './sign-in.component';

import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserCenterComponent,
    SignInComponent
  ],
  exports: [],
  providers: []
})

export class UserModule {
}

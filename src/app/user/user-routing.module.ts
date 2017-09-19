import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {UserComponent} from "./user.component";
import {UserCenterComponent} from "./user-center.component";
import {SignInComponent} from "./sign-in.component";
import {AddressListComponent} from "./address-list.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path: 'login',
            component: SignInComponent
          },
          {
            path:'address',
            component:AddressListComponent
          },
          {
            path: '',
            component: UserCenterComponent
          },
        ]
      },
    ])],
  exports: [RouterModule]
})

export class UserRoutingModule {
}

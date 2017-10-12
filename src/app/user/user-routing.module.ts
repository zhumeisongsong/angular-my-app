import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {UserComponent} from "./user.component";
import {UserCenterComponent} from "./user-center.component";


import {AddressListComponent} from "./address/address-list.component";
import {AddressDetailComponent} from "./address/address-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path:'address',
            component:AddressListComponent,
          },
          {
            path: 'address/:id',
            component: AddressDetailComponent
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

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {UserCenterComponent} from "./user-center.component";
import {SignInComponent} from "./sign-in.component";
import {UserComponent} from "./user.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path: '',
            component: UserCenterComponent
          },
          {
            path: 'login',
            component: SignInComponent
          },
        ]
      },
    ])],
  exports: [RouterModule]
})

export class UserRoutingModule {
}

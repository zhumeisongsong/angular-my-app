import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {UserCenterComponent} from "./user-center.component";
import {SignInComponent} from "./sign-in.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'user', component: UserCenterComponent},
      {path: 'login', component: SignInComponent}
    ])],
  exports: [RouterModule]
})

export class UserRoutingModule {}

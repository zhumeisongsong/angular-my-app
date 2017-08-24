import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import { AuthGuard }                from './auth-guard.service';

export const routes: Routes = [
  {
    path: 'order',
    loadChildren: 'app/order/order.module#OrderModule',
    data: { preload: true }
  },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canLoad: [AuthGuard]
  // },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true}
    )//仅用于应用的根模块
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

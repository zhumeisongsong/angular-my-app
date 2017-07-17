import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListComponent}        from './pruduct/list.component';
import {HeroesComponent}      from './pruduct/heroes.component';
import {ProductDetailComponent}  from './pruduct/product-detail.component';

import {CartComponent}        from './order/cart.component';

import {UserCenterComponent}        from './user/user-center.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'user',
    component: UserCenterComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

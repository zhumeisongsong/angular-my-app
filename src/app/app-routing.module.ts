import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/product/list',
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

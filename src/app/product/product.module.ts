import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';

import {ProductService} from './product.service';
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  exports: [],
  providers: [
    ProductService
  ]
})

export class ProductModule {
}

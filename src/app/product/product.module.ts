import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';

import {ProductSearchComponent} from './product-search.component';

import {ProductService} from './product.service';
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductSearchComponent
  ],
  exports: [],
  providers: [
    ProductService
  ]
})

export class ProductModule {
}

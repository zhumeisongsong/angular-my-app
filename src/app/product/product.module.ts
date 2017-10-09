import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductSearchComponent} from './product-search.component';
import {SetParameterComponent} from "./set-parameter.component";

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
    ProductSearchComponent,
    SetParameterComponent
  ],
  exports: [],
  providers: [
    ProductService
  ]
})

export class ProductModule {
}

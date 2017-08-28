import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdTabsModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,MdTabsModule],
  exports: [MdButtonModule, MdCheckboxModule,MdTabsModule],
})
export class CustomMaterialModule { }

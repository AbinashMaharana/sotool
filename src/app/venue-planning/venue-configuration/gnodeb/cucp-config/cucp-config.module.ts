import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CucpConfigComponent } from './cucp-config.component';
import { CucpRoutingModule } from './cucp-routing.module';


@NgModule({
  declarations: [CucpConfigComponent],
  imports: [
    CommonModule,
    CucpRoutingModule
  ]
})
export class CucpConfigModule { }

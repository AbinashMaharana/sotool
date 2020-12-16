import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SitePlanningRoutingModule } from './site-planning-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SitePlanningRoutingModule
  ]
})
export class SitePlanningModule { }

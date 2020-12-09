import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRequirementsRoutingModule } from './site-requirements-routing.module';
import { SiteRequirementsComponent } from './site-requirements.component';


@NgModule({
  declarations: [SiteRequirementsComponent],
  imports: [
    CommonModule,
    SiteRequirementsRoutingModule
  ]
})
export class SiteRequirementsModule { }

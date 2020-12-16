import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteConfigurationRoutingModule } from './site-configuration-routing.module';
import { SiteConfigurationComponent } from './site-configuration.component'

@NgModule({
  declarations: [SiteConfigurationComponent],
  imports: [
    CommonModule,
    SiteConfigurationRoutingModule
  ]
})
export class SiteConfigurationModule { }

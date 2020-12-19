import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GnodebRoutingModule } from './gnodeb-routing.module';
import { CucpConfigComponent } from './cucp-config/cucp-config.component';
import { CuupConfigComponent } from './cuup-config/cuup-config.component';
import { DuConfigComponent } from './du-config/du-config.component';
import { RadioUnitComponent } from './radio-unit/radio-unit.component';
import { GnodebComponent } from './gnodeb.component';


@NgModule({
  declarations: [GnodebComponent, RadioUnitComponent],
  imports: [
    CommonModule,
    GnodebRoutingModule
  ]
})
export class GnodebModule { }

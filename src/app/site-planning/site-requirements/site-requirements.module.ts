import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SiteRequirementsRoutingModule } from './site-requirements-routing.module';
import { SiteRequirementsComponent } from './site-requirements.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { CiqRuDetailsComponent } from './ciq-ru-details/ciq-ru-details.component';
import { BillOfMaterialsComponent } from './bill-of-materials/bill-of-materials.component';


@NgModule({
  declarations: [SiteRequirementsComponent, SiteDetailsComponent, CiqRuDetailsComponent, BillOfMaterialsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SiteRequirementsRoutingModule
  ]
})
export class SiteRequirementsModule {

}

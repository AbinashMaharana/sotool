import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { BillOfMaterialsComponent } from './bill-of-materials/bill-of-materials.component';
import { CiqRuDetailsComponent } from './ciq-ru-details/ciq-ru-details.component';

const routes: Routes = [
  {
    path: 'site_details',
    component: SiteDetailsComponent,
    data: { title: 'Site Details' }
  },
  {
    path: 'bom',
    component: BillOfMaterialsComponent,
    data: { title: 'Bill Of Materials' }
  },
  {
    path: 'ciq_ru_details',
    component: CiqRuDetailsComponent,
    data: { title: 'CIQ and Radio Unit Details' }
  },
  {
    path: '',
    redirectTo: 'site_details'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRequirementsRoutingModule { }

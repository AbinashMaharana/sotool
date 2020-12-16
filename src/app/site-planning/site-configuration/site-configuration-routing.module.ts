import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteConfigurationComponent } from './site-configuration.component';

import { VnfManagerComponent } from './vnf-manager/vnf-manager.component';
import { GnodebComponent } from './gnodeb/gnodeb.component';
import { EdgeCloudComponent } from './edge-cloud/edge-cloud.component';

const routes: Routes = [
  {
    path: 'vnf_manager',
    component: VnfManagerComponent,
    data: { title: 'VNF Manager' }
  },
  {
    path: 'gNodeB',
    component: GnodebComponent,
    data: { title: 'gNodeB' }
  },
  {
    path: 'edge_cloud',
    component: EdgeCloudComponent,
    data: { title: 'Edge Cloud' }
  },
  {
    path: '',
    redirectTo: 'vnf_manager'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteConfigurationRoutingModule { 
 
}

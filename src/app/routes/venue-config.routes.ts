import { Routes } from '@angular/router';
import { EdgeCloudComponent } from '../venue-planning/venue-configuration/edge-cloud/edge-cloud.component';
import { GnodebComponent } from '../venue-planning/venue-configuration/gnodeb/gnodeb.component';
import { VenueConfigurationComponent } from '../venue-planning/venue-configuration/venue-configuration.component';
import { VnfManagerComponent } from '../venue-planning/venue-configuration/vnf-manager/vnf-manager.component';

export const VENUE_CONFIG_ROUTES: Routes = [
  {
    path: 'gNodeB/:id',
    loadChildren: () =>
      import(
        '../venue-planning/venue-configuration/gnodeb/gnodeb.module'
      ).then((m) => m.GnodebModule),
    data: { title: 'gNodeB' },
  },
  {
    path: '',
    redirectTo: 'gNodeB/1',
    pathMatch: 'full'
  }
];

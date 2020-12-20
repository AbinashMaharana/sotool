import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CucpConfigComponent } from './cucp-config/cucp-config.component';
import { CuupConfigComponent } from './cuup-config/cuup-config.component';
import { DuConfigComponent } from './du-config/du-config.component';
import { GnodebComponent } from './gnodeb.component';

const routes: Routes = [
  {
    path: '',
    component: GnodebComponent,
    children: [
      {
        path: 'cuup_config',
        loadChildren: () =>
        import('./cuup-config/cuup-config.module').then(
          (m) => m.CuupConfigModule
        ),
        data: { title: 'CUUP Configuration' },
      },
      {
        path: 'du_config',
        loadChildren: () =>
        import('./cucp-config/cucp-config.module').then(
          (m) => m.CucpConfigModule
        ),
        data: { title: 'DU Configuration' },
      },
      {
        path: 'cucp_config',
        loadChildren: () =>
          import('./cucp-config/cucp-config.module').then(
            (m) => m.CucpConfigModule
          ),
        data: { title: 'CUCP Configuration' }
      },
      {
        path: '',
        redirectTo: 'cucp_config',
      },
    ],
    data: { title: 'gNodeB' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GnodebRoutingModule {}

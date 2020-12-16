import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
    // {
    //   path: 'site_requirements',
    //   loadChildren: () => import('./site-requirements/site-requirements.module').then(m => m.SiteRequirementsModule)
    // }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitePlanningRoutingModule { }

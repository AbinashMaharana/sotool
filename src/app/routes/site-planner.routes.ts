import { Routes } from '@angular/router';

export const SITE_PLANNER_ROUTES: Routes = [
    // {
    //     path: '',
    //     loadChildren: () => import('../site-planning/site-planning.module').then(m => m.SitePlanningModule)
    // },
    {
        path: 'site_requirement',
        loadChildren: () => import('../site-planning/site-requirements/site-requirements.module').then(m => m.SiteRequirementsModule),
        data: { title: 'Site Requirements' }
    },
    {
        path: 'site_configuration',
        loadChildren: () => import('../site-planning/site-configuration/site-configuration.module').then(m => m.SiteConfigurationModule),
        data: { title: 'Site Configuration' }
    }

]
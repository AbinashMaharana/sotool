import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

import { SITE_PLANNER_ROUTES } from './routes/site-planner.routes';
import { DASHBOARD_ROUTES } from './routes/dashboard-layout.routes';
import { LOGIN_ROUTES } from './routes/login-layout.routes';

const routes: Routes = [
  { path: '', component: LoginLayoutComponent, children: LOGIN_ROUTES },
  { path: 'dashboard', component: AppLayoutComponent, children: DASHBOARD_ROUTES, data: { title: 'Dashboard' } },
  { path: 'site_planning', component: AppLayoutComponent, children: SITE_PLANNER_ROUTES, data: { title: 'Site Planning' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

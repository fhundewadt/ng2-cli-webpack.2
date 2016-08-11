import { Routes, provideRouter } from "@angular/router";

import { dashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
  ...dashboardRoutes,
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
export const appRouterProviders = [
  provideRouter(routes),
];

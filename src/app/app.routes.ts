import { Routes } from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'not-found', component: RouteNotFoundComponent },
  {
    path: '',
    loadChildren: () =>
      import('./validated/validated.module').then((m) => m.ValidatedModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: RouteNotFoundComponent,
  },
];

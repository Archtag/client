import { Routes } from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'not-found', component: RouteNotFoundComponent },
    {
        path: '**',
        component: RouteNotFoundComponent
    }
];

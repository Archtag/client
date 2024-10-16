import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../shared/state/auth.state.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authStateService = inject(AuthStateService);

  const isAuthenticated = authStateService.isAuthenticated();

  if (!isAuthenticated) {
    const hadBeenSignedIn = localStorage.getItem('had_been_signed_in');
    router.navigate(hadBeenSignedIn ? ['/auth/login'] : ['/auth/sign-up']);
    return false;
  }

  return true;
};

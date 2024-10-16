import { computed, inject, Injectable, signal } from '@angular/core';
import { IAuthState, IAuthStateUser } from '../interfaces/AuthState.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

export class AuthStateService {
  private authService = inject(AuthService);

  private state = signal<IAuthState>({
    isAuthenticated: false,
    user: null,
    token: '',
    refreshToken: '',
  });

  authState = computed(() => this.state());
  isAuthenticated = computed(() => this.state().isAuthenticated);
  user = computed(() => this.state().user);

  authenticate$ = new Subject<{
    user: IAuthStateUser;
    token: string;
    refreshToken: string;
  }>();
  signOut$ = new Subject<void>();

  constructor() {
    this.authenticate$
      .pipe(takeUntilDestroyed())
      .subscribe(({ user, token, refreshToken }) => {
        this.state.set({
          isAuthenticated: true,
          user,
          token,
          refreshToken,
        });
      });

    this.signOut$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.state.set({
        isAuthenticated: false,
        user: null,
        token: '',
        refreshToken: '',
      });
    });

    this.checkIsAuthenticatedOnLoad();
  }

  private checkIsAuthenticatedOnLoad() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!token || !refreshToken) {
      console.log('no token or refresh token');
      return;
    }

    const user = this.authService.getUsesData(token);

    if (true) {
      this.state.set({
        isAuthenticated: true,
        user: user,
        token,
        refreshToken,
      });
    }
  }
}

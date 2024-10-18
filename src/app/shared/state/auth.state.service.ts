import { computed, inject, Injectable, signal } from '@angular/core';
import { IAuthState } from '../interfaces/AuthState.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../interfaces/User.inteface';

export class AuthStateService {
  private authService = inject(AuthService);

  private state = signal<IAuthState>({
    isAuthenticated: false,
    user: null,
    token: '',
    refreshToken: '',
  });

  authState = computed(() =>
    this.throwIfNotAuthenticatedElseExecute<IAuthState>(() => this.state())
  );
  isAuthenticated = computed(() => {
    console.log(this.state().isAuthenticated);
    return this.state().isAuthenticated;
  });
  user = computed(() =>
    this.throwIfNotAuthenticatedElseExecute<IUser>(() => this.state().user!)
  );

  authenticate$ = new Subject<{
    user: IUser;
    token: string;
    refreshToken: string;
  }>();
  signOut$ = new Subject<void>();

  constructor() {
    this.authenticate$.pipe(takeUntilDestroyed()).subscribe(this.authenticate);

    this.signOut$.pipe(takeUntilDestroyed()).subscribe(this.signOut);

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

  private authenticate({
    user,
    token,
    refreshToken,
  }: {
    user: IUser;
    token: string;
    refreshToken: string;
  }) {
    this.state.set({
      user,
      token,
      refreshToken,
      isAuthenticated: true,
    });
  }

  private signOut() {
    this.state.set({
      user: null,
      token: '',
      refreshToken: '',
      isAuthenticated: false,
    });
  }

  private throwIfNotAuthenticatedElseExecute<ReturnType>(fn: () => ReturnType) {
    if (!this.state().isAuthenticated)
      throw new Error(
        'User is not authenticated. You can not access user data!'
      );
    return fn();
  }
}

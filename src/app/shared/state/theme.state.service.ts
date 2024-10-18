import { computed, effect, signal } from '@angular/core';

export type Theme = 'emerald' | 'dim';

export const lightTheme: Theme = 'emerald';
export const darkTheme: Theme = 'dim';

export class ThemeStateService {
  private state = signal<Theme | undefined>(undefined);

  theme = computed<Theme>(() => {
    const theme = this.state();
    if (theme) return theme;
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return darkTheme;
    }
    return lightTheme;
  });

  private setTheme(theme: Theme) {
    this.state.set(theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    this.setTheme(this.theme() === lightTheme ? darkTheme : lightTheme);
  }

  constructor() {
    if (localStorage.getItem('theme')) {
      this.setTheme(localStorage.getItem('theme') as Theme);
    }
    console.log(localStorage.getItem('theme'));
  }
}

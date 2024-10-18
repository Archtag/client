import { Component } from '@angular/core';
import {
  lightTheme,
  Theme,
  ThemeStateService,
} from './shared/state/theme.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  theme = this.themeStateService.theme;

  constructor(private themeStateService: ThemeStateService) {}
}

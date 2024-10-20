import { Component } from '@angular/core';
import {
  lightTheme,
  Theme,
  ThemeStateService,
} from './shared/state/theme.state.service';
import { routeTransition } from './route-transition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routeTransition],
})
export class AppComponent {
  theme = this.themeStateService.theme;

  constructor(
    private themeStateService: ThemeStateService,
    protected route: ActivatedRoute
  ) {}
}

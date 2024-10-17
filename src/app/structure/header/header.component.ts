import { Component, inject } from '@angular/core';
import { AuthStateService } from '../../shared/state/auth.state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  authStateService = inject(AuthStateService);
}

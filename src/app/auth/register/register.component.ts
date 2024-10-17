import { Component, inject } from '@angular/core';
import { AuthStateService } from '../../shared/state/auth.state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  authStateService = inject(AuthStateService);

  constructor() {
    const user = this.authStateService.user();
    console.log(user);
  }
}

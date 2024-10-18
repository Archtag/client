import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStateService } from './state/auth.state.service';
import { ThemeStateService } from './state/theme.state.service';
import { InputComponent } from './components/input.component';

@NgModule({
  declarations: [],
  providers: [AuthStateService, ThemeStateService],
  imports: [CommonModule],
})
export class SharedModule {}

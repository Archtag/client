import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStateService } from './state/auth.state.service';

@NgModule({
  declarations: [],
  providers: [AuthStateService],
  imports: [CommonModule],
})
export class SharedModule {}

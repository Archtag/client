import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';
import { NotAuthenticatedHeaderComponent } from './not-authenticated-header.component';
import { AuthenticatedHeaderComponent } from './authenticated-header.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    HeaderComponent,
    NotAuthenticatedHeaderComponent,
    AuthenticatedHeaderComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}

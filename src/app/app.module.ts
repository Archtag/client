import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './structure/header/header.module';
import { ThemeStateService } from './shared/state/theme.state.service';
import { AuthStateService } from './shared/state/auth.state.service';

@NgModule({
  declarations: [AppComponent, FooterComponent, RouteNotFoundComponent],
  imports: [
    CommonModule,
    HeaderModule,
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private authStateService: AuthStateService) {}
}

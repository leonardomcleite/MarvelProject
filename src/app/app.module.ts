import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelHeroesService } from './services/marvel-heroes/marvel-heroes.service';
import { CopierService } from './shared/copier/copier.service';
import { SidenavModule } from './shared/sidenav/sidenav.module';
import { DateFormatUtilService } from './shared/utils/date-format/date-format-util.service';
import { LazyLoadUtilClass } from './shared/utils/lazy-load/lazy-load-util.class';
import { NavigationService } from './shared/utils/navigation/navigation.service';
import { ScrolledService } from './shared/utils/scrolled/scrolled.service';
import { GuardService } from './services/guard/guard.service';
import { PropertyProviderService } from './services/base-service/property-provider.service';
import { AppPropertyProviderService } from './services/base-service/app-property-provider.service';
import { RestClientService } from './services/base-service/rest-client.service';
import { CustomHttpEventObserverService } from './services/base-service/custom-http-event-observer.service';
import { LoginModule } from './pages/login/login.module';
import { MatSnackBarModule } from '@angular/material';
import { SendmailService } from './services/sendmail/sendmail.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    SidenavModule,
    LoginModule,

    MatSnackBarModule
  ],
  providers: [
    { provide: PropertyProviderService, useClass: AppPropertyProviderService },
    CopierService,
    MarvelHeroesService,
    NavigationService,
    DateFormatUtilService,
    LazyLoadUtilClass,
    ScrolledService,
    GuardService,
    RestClientService,
    CustomHttpEventObserverService,
    SendmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

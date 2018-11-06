import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorIntl, MAT_DATE_LOCALE, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPropertyProviderService } from './services/base-service/app-property-provider.service';
import { CustomHttpEventObserverService } from './services/base-service/custom-http-event-observer.service';
import { HandleErrorService } from './services/base-service/handle-error.service';
import { NotificationService } from './services/base-service/notification.service';
import { PropertyProviderService } from './services/base-service/property-provider.service';
import { RestClientService } from './services/base-service/rest-client.service';
import { CharactersService } from './services/characters/characters.service';
import { CopierService } from './services/copier/copier.service';
import { GameService } from './services/game/game.service';
import { GmailService } from './services/gmail/gmail.service';
import { GuardService } from './services/guard/guard.service';
import { MarvelHeroesService } from './services/marvel-heroes/marvel-heroes.service';
import { MenusService } from './services/menus/menus.service';
import { ProfilesService } from './services/profiles/profiles.service';
import { UsersService } from './services/users/users.service';
import { CustomPaginator } from './shared/custom-mat-paginator/custom-mat-paginator.component';
import { BarLoaderModule } from './shared/loaders/bar/bar-loader.module';
import { NotificationModule } from './shared/notification/notifiction.module';
import { PageContentModule } from './shared/page-content/page-content.module';
import { DateFormatUtilService } from './shared/utils/date-format/date-format-util.service';
import { LazyLoadUtilClass } from './shared/utils/lazy-load/lazy-load-util.class';
import { NavigationService } from './shared/utils/navigation/navigation.service';
import { ScrolledService } from './shared/utils/scrolled/scrolled.service';

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
    MatSnackBarModule,
    NotificationModule,
    PageContentModule,
    BarLoaderModule,
  ],
  providers: [
    { provide: PropertyProviderService, useClass: AppPropertyProviderService },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
    { provide: MatPaginatorIntl, useClass: CustomPaginator},
    CopierService,
    MarvelHeroesService,
    NavigationService,
    DateFormatUtilService,
    LazyLoadUtilClass,
    ScrolledService,
    GuardService,
    RestClientService,
    CustomHttpEventObserverService,
    GmailService,
    GameService,
    NotificationService,
    UsersService,
    ProfilesService,
    MenusService,
    HandleErrorService,
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

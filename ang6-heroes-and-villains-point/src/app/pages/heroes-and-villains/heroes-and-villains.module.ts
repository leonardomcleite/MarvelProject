import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSnackBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppPageDetailModule } from 'src/app/shared/app-layouts/app-page-detail/app-page-detail.module';
import { ErrorModule } from '../../shared/error/error.module';
import { FilterAndSearchBarModule } from '../../shared/filter-and-search-bar/filter-and-search-bar.module';
import { GooeyRingLoaderModule } from '../../shared/loaders/gooey-ring/gooey-ring-loader.module';
import { ModalDialogModule } from '../../shared/modal-dialog/modal-dialog.module';
import { ToolbarModule } from '../../shared/toolbar/toolbar.module';
import { HeroesAndVillainsRoutingModule } from './heroes-and-villains-routing.module';
import { HeroesAndVillainsComponent } from './heroes-and-villains.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesAndVillainsRoutingModule,
    ModalDialogModule,
    GooeyRingLoaderModule,
    ErrorModule,
    ToolbarModule,
    FilterAndSearchBarModule,
    InfiniteScrollModule,
    AppPageDetailModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  declarations: [
    HeroesAndVillainsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroesAndVillainsModule { }

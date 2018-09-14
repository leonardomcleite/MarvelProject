import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatSnackBarModule, MatTabsModule } from '@angular/material';
import { ErrorModule } from '../../shared/error/error.module';
import { FilterAndSearchBarModule } from '../../shared/filter-and-search-bar/filter-and-search-bar.module';
import { GooeyRingLoaderModule } from '../../shared/loaders/gooey-ring/gooey-ring-loader.module';
import { ModalDialogModule } from '../../shared/modal-dialog/modal-dialog.module';
import { ToolbarModule } from '../../shared/toolbar/toolbar.module';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ModalDialogModule,
    GooeyRingLoaderModule,
    ErrorModule,
    ToolbarModule,
    FilterAndSearchBarModule,
    InfiniteScrollModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  declarations: [
    CharacterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CharacterModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatSidenavModule, MatSlideToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SidenavComponent } from './sidenav.component';
import { FooterModule } from '../footer/footer.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollModule } from '../../directives/scroll/scroll.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    ScrollModule,

    ToolbarModule,
    FooterModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,

    InfiniteScrollModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }

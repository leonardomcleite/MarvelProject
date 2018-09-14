import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';
import { ThemePickerModule } from '../theme-picker';

@NgModule({
  imports: [
    CommonModule,

    ThemePickerModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }

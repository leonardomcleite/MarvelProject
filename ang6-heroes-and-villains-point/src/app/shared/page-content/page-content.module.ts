import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PageContentComponent } from './page-content.component';
import { FormsModule } from '@angular/forms';
import { SidenavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [
    PageContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SidenavModule,
  ],
  exports: [
    PageContentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageContentModule { }

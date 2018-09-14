import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NotificationAreaComponent } from './area/notification-area.component';
import { NotificationItemComponent } from './item/notification-item.component';
import { NotificationDirective } from './notification.directive';
import { NotificationQueueComponent } from './queue/notification-queue.component';

const COMPONENTS = [
    NotificationDirective,
    NotificationItemComponent,
    NotificationQueueComponent,
    NotificationAreaComponent
];

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationModule {}

export * from './notification.component';


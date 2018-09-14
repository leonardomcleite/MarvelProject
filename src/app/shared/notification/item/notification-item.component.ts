import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations';
import { NotificationButton } from '../../../services/notification/notification-message';
import { NotificationComponent } from '../notification.component';
import { NotificationType } from '../../../services/notification/notification.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'notification-item',
    template: `
        <div class="notification-item-areas"
            [class.has-icon]="notification.message && notification.message.icon"
            [class.has-title]="notification.message && notification.message.title">
            <div class="notification-item-icon" *ngIf="notification.message.icon">
                <mat-icon>{{notification.message.icon}}</mat-icon>
            </div>
            <div class="notification-item-content">
                <div class="notification-item-title" *ngIf="notification.message.title">{{notification.message.title}}</div>
                <div class="notification-item-body" [innerHtml]="notification.message.message"></div>
            </div>
        </div>
        <div class="notification-item-buttons" *ngIf="notification.message.buttons?.length > 0">
            <button mat-button type="button" *ngFor="let button of notification.message.buttons" (click)="clickButton(button)">
            {{button.label}}
            </button>
            </div>
        <div class="notification-button-close" (click)="closeItem()">
          <mat-icon>close</mat-icon>
        </div>
    `,
    //     <mat-progress-bar
    //         *ngIf="config.hasTimer"
    //         [value]="config.percent"
    //         mode="determinate">
    //     </mat-progress-bar>
    // `,

    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.success]': 'notification.type == "SUCCESS"',
        '[class.error]': 'notification.type == "ERROR"',
        '[class.warn]': 'notification.type == "WARN"',
        '[class.info]': 'notification.type == "INFO"',
        '[@notificationState]': ''
    },
    animations: [
        trigger('notificationState', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
              style({transform: 'translateX(100%)'}),
              animate(150)
            ]),
            transition('* => void', [
              animate(150, style({transform: 'translateX(100%)'}))
            ])
          ])
    ]
})
export class NotificationItemComponent {

    @Input() notification: NotificationType;
    @Input() config: NotificationComponent;
    @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
    clickButton(button: NotificationButton) {
        button.action();
        if (button.closeNotification) {
            this.closeItem();
        }
    }

    closeItem() {
        this.onClose.emit();
    }
}


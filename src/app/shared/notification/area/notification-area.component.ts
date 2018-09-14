import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NotificationQueueComponent } from '../queue/notification-queue.component';
import { NotificationService, NotificationType } from '../../../services/notification/notification.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'notification-area',
    template: `
        <notification-queue position="bottomLeft"></notification-queue>
        <notification-queue position="bottomCenter"></notification-queue>
        <notification-queue position="bottomRight"></notification-queue>
        <notification-queue position="Center"></notification-queue>
        <notification-queue position="topLeft"></notification-queue>
        <notification-queue position="topCenter"></notification-queue>
        <notification-queue position="topRight"></notification-queue>
    `,
    styleUrls: ['../notification.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NotificationAreaComponent implements OnInit, OnDestroy {
   public _subscriptions: Subscription[] = [];

    @ViewChildren(NotificationQueueComponent) _queues: QueryList<NotificationQueueComponent>;
    constructor(private _notificationService: NotificationService, public router: Router) {}

    ngOnInit(): void {
        this._subscriptions.push(this._notificationService.notifications.subscribe((type: NotificationType) => {
            this.generateNotification(type);
        }));
        this._subscriptions.push(this._notificationService.actions.subscribe((action: string) => {
            if (action === 'closeAll') {
                this._queues.forEach((queue) => queue.closeAll());
            }
        }));
        this._subscriptions.push(this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this._queues.forEach((queue) => queue.onRouteChanged());
            }
        }));
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach((sub) => sub.unsubscribe());
    }

   public generateNotification(type: NotificationType) {
        this._queues.forEach((queue) => {
            if (queue.position === type.message.position) {
                queue.add(type);
            }
        });
    }
}

import { Injectable } from '@angular/core';
import { NotificationMessage, NotificationButton } from './notification-message';
import { Subject } from 'rxjs/internal/Subject';

export type NotificationTypeList = 'SUCCESS' | 'ERROR' | 'WARN' | 'INFO';
// tslint:disable-next-line:interface-over-type-literal
export type NotificationType = {type: NotificationTypeList, message: NotificationMessage};

@Injectable()
export class NotificationService {

    notifications: Subject<NotificationType> = new Subject<NotificationType>();
    actions: Subject<string> = new Subject<string>();

    success(message: string | NotificationMessage) {
        message = this._adjustMessage(message);
        message.position = message.position ? message.position : 'topRight';
        message.icon = message.icon ? message.icon : 'check';
        this.show('SUCCESS', message);
    }

    error(message: string | NotificationMessage) {
        message = this._adjustMessage(message);
        message.icon = message.icon ? message.icon : 'report';
        this.show('ERROR', message);
    }

    warn(message: string | NotificationMessage) {
        message = this._adjustMessage(message);
        message.icon = message.icon ? message.icon : 'warning';
        this.show('WARN', message);
    }

    info(message: string | NotificationMessage) {
        message = this._adjustMessage(message);
        message.icon = message.icon ? message.icon : 'info';
        this.show('INFO', message);
    }

    // tslint:disable-next-line:cyclomatic-complexity
    show(type: NotificationTypeList, message: string | NotificationMessage) {
        message = this._adjustMessage(message);
        const buttons: NotificationButton[] = [];
        if (message.buttons && message.buttons.length > 0) {
            message.buttons.forEach((button) => buttons.push({
                label: button.label,
                action: button.action,
                closeNotification: button.closeNotification === true
            }));
        }

        message.keepOnRouteChange = message.keepOnRouteChange === undefined ? false : message.keepOnRouteChange;

        this.notifications.next({
            type: type,
            message: {
                message: message.message,
                title: message.title,
                icon: message.icon,
                position: message.position ? message.position : 'topRight',
                timeout: !message.timeout || message.timeout === false ? false : (message.timeout === true ? 4000 : message.timeout),
                keepOnRouteChange: !message.keepOnRouteChange || message.keepOnRouteChange === false ? 0 : (
                    message.keepOnRouteChange === true ? -1 : message.keepOnRouteChange
                ),
                onDismiss: message.onDismiss,
                buttons: buttons
            }
        });
    }

    closeAll() {
        this.actions.next('closeAll');
    }

   _adjustMessage(message: string | NotificationMessage): NotificationMessage {
        if (typeof message === 'string') {
            message = {
                message: message
            };
        }
        return message;
    }
}

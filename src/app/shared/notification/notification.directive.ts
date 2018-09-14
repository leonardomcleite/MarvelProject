import { Directive, OnDestroy, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { NotificationType } from '../../services/notification/notification.service';
import { NotificationComponent } from './notification.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[NotificationItem]'
})
export class NotificationDirective implements OnDestroy {

  constructor(private viewContainer: ViewContainerRef,
    public templateRef: TemplateRef < {
      notification: NotificationType,
      config: NotificationComponent,
      destroy: Function
    } > ) {}

  show(notification: NotificationType, config: NotificationComponent): ViewRef {
    const view = this.viewContainer.createEmbeddedView(this.templateRef, {
      notification: notification,
      config: config,
      destroy: () => {
        view.destroy();
      }
    });
    view.onDestroy(() => {
      if (notification.message.onDismiss) {
        notification.message.onDismiss(config.automaticClosed);
      }
    });
    return view;
  }

  ngOnDestroy(): void {
    this.viewContainer.clear();
  }
}

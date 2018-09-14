import { Injectable } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';

@Injectable()
export class BaseParamsService {

  constructor(public notificationService: NotificationService) {}

}

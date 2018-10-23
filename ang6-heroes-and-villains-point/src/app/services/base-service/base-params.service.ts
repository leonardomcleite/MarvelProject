import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class BaseParamsService {

  constructor(public notificationService: NotificationService) {}

}

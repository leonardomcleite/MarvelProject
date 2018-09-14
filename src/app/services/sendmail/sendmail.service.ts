import { Injectable } from '@angular/core';
import { PropertyProviderService } from '../base-service/property-provider.service';

@Injectable()
export class SendmailService {

  appKey: string;

  constructor(
    public propertyProvider: PropertyProviderService,
  ) {
    this.appKey = this.propertyProvider.getAppKey();
  }

  sendEmail() {
    
  }

}

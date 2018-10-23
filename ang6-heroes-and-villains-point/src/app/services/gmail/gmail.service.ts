import { Injectable } from '@angular/core';
import { Sendmail } from '../../models/sendmail.model';
import { REST_PATH } from '../../shared/utils/endpoints/app.config';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';
import { RestClientService } from '../base-service/rest-client.service';

@Injectable()
export class GmailService {

  baseBackEnd: string;

  constructor(
    public propertyProvider: PropertyProviderService,
    public restClientService: RestClientService,
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  sendEmail(sendMail: Sendmail) {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.gmail.sendMail, sendMail);
  }

  getLabels() {
    return this.restClientService.get(this.baseBackEnd + REST_PATH.gmail.getLabels);
  }

  mailBox() {
    return this.restClientService.get(this.baseBackEnd + REST_PATH.gmail.mailBox);
  }

}

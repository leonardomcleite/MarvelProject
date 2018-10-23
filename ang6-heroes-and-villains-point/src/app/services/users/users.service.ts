import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestAccessModel } from 'src/app/models/request-access.model';
import { UserAuth } from '../../models/user-auth.model';
import { UserPersonalData } from '../../models/user-personal-data.model';
import { REST_PATH } from '../../shared/utils/endpoints/app.config';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';
import { RestClientService } from '../base-service/rest-client.service';

@Injectable()
export class UsersService {

  baseBackEnd: string;

  constructor(
    public restClientService: RestClientService,
    public propertyProvider: PropertyProviderService,
    public http: HttpClient
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  /**
   *
   */
  registerUser(user: UserPersonalData): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.user.registerUser, user);
  }

  /**
   *
   */
  confirmRegister(user: UserPersonalData): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.user.confirmRegister, user);
  }

  /**
   *
   */
  confirmExitentUser(user: UserPersonalData): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.user.confirmExitentUser, user);
  }


  /**
   *
   */
  loginUser(user: UserAuth): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.user.loginUser, user);
  }

  /**
   *
   */
  loginUserEmail(user: UserAuth): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.user.loginUserEmail, user);
  }

  /**
   *
   */
  requestAccess(access: RequestAccessModel): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.user.requestAccess, access);
  }

}

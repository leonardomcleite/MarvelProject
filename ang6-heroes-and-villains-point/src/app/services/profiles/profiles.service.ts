import { Injectable } from '@angular/core';
import { ProfileAccess } from '../../models/profiles.model';
import { REST_PATH } from '../../shared/utils/endpoints/app.config';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';
import { RestClientService } from '../base-service/rest-client.service';

@Injectable()
export class ProfilesService {

  baseBackEnd: string;

  constructor(
    public restClientService: RestClientService,
    public propertyProvider: PropertyProviderService,
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  /**
   *
   */
  createProfile(profile: ProfileAccess): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.profile.create, profile);
  }

  /**
   *
   */
  updateProfile(profile: ProfileAccess): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.profile.update, profile);
  }

  /**
   *
   */
  listProfiles(): any {
    return this.restClientService.get(this.baseBackEnd + REST_PATH.profile.list);
  }

  /**
   *
   */
  deleteProfile(profile: ProfileAccess[]): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.profile.delete, profile);
  }

}

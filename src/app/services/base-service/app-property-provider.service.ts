import { Injectable } from '@angular/core';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP, _HTTP_URL_BASE_MARVEL } from './property-provider.service';

@Injectable()
export class AppPropertyProviderService extends PropertyProviderService {

  getProperty(name: string) {
    switch (name) {
      case _HTTP_URL_BACK_END_APP:
        return 'http://localhost:8080/java-visualizacao-de-dados';
      case _HTTP_URL_BASE_MARVEL:
        return 'https://gateway.marvel.com:443/v1/public/';
    }
    return null;
  }

  getAppKey() {
    return '85418c85d33295c591c5cab7c74ef2aa';
  }

}

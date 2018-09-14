import { Injectable } from '@angular/core';
export const _HTTP_URL_BACK_END_APP = '_HTTP_URL_BACK_END_APP';
export const _HTTP_URL_BASE_MARVEL = '_HTTP_URL_BASE_MARVEL';

@Injectable()
export class PropertyProviderService {

  getProperty(name: string): string {
    throw new Error('You must extend the PropertyProvider class');
  }

  getAppKey(): string {
    throw new Error('You must extend the PropertyProvider class');
  }

}

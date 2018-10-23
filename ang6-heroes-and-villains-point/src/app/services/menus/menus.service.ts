import { Injectable } from '@angular/core';
import { MenuAccess } from '../../models/menu-access.model';
import { REST_PATH } from '../../shared/utils/endpoints/app.config';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';
import { RestClientService } from '../base-service/rest-client.service';

@Injectable()
export class MenusService {

  baseBackEnd: string;

  constructor(
    public propertyProvider: PropertyProviderService,
    public restClientService: RestClientService,
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  /**
   *
   */
  createMenu(menus: MenuAccess): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.menu.create, menus);
  }

  /**
   *
   */
  createMenuWithList(menus: MenuAccess): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.menu.createWithList, menus);
  }

  /**
   *
   */
  listMenus(): any {
    return this.restClientService.get(this.baseBackEnd + REST_PATH.menu.list);
  }

  /**
   *
   */
  updateMenu(menus: [MenuAccess]): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.menu.update, menus);
  }

  /**
   *
   */
  deleteMenu(menus: MenuAccess[]): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.menu.delete, menus);
  }
}

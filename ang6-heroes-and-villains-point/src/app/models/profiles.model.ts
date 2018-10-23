import { MenuAccess } from './menu-access.model';

export class ProfileAccess {
  id: Number;
  nameProfile: String;
  menus: MenuAccess[];

  constructor(nameProfile: String, menus: MenuAccess[]) {
    this.nameProfile = nameProfile;
    this.menus = menus;
  }
}

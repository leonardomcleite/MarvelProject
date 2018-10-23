export class MenuAccess {
  public id: number;
  public nameMenu: string;
  public description: string;
  public route: string;
  public icon: string;
  public hidden: string;
  public favorite: string;

  constructor(nameMenu?: string, description?: string, route?: string, icon?: string, hidden?: string, favorite?: string) {
    this.nameMenu = nameMenu;
    this.description = description;
    this.route = route;
    this.icon = icon;
    this.hidden = hidden;
    this.favorite = favorite;
  }
}

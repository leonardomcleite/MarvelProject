import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  constructor() {}

  openNewTabAndRedirect(url: string) {
    window.open(url);
  }
}

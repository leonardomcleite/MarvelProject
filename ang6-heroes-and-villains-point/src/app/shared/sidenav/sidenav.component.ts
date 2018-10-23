import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserPersonalData } from '../../models/user-personal-data.model';
import { GuardService } from '../../services/guard/guard.service';
import { ScrolledService } from '../utils/scrolled/scrolled.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav;
  private _mobileQueryListener: () => void;
  mode = new FormControl('over');
  mobileQuery: MediaQueryList;
  userLogged: UserPersonalData;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public scrolledService: ScrolledService,
    public guardService: GuardService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.userLogged = JSON.parse(sessionStorage.getItem('Perfis'));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  scrollDown() {
    this.scrolledService.scrollDown.emit();
  }

  fixedPosition(value) {
    this.scrolledService.fixedPosition.emit(value);
  }

}

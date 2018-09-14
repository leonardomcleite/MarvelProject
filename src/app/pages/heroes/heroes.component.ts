import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { ParamsPagination } from '../../models/params-pagination.model';
import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';
import { DateFormatUtilService } from '../../shared/utils/date-format/date-format-util.service';
import { LazyLoadUtilClass } from '../../shared/utils/lazy-load/lazy-load-util.class';
import { ScrolledService } from '../../shared/utils/scrolled/scrolled.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  paramsPaginationHeroes: ParamsPagination = new ParamsPagination(0, 10, '-', 'modified');
  lazyLoad: LazyLoadUtilClass;
  substription: Subscription[] = [];
  endHeroes: boolean;

  constructor(
    public marvelHeroesService: MarvelHeroesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dateUtil: DateFormatUtilService,
    public scrolledService: ScrolledService
  ) {}

  ngOnInit() {
    this.lazyLoad = new LazyLoadUtilClass();
    this.substription.push(this.lazyLoad.searchData.subscribe(returnQuery => {
      this.getHeroes();
    }));
    this.substription.push(this.scrolledService.scrollDown.subscribe(returnQuery => {
      this.scrollDown();
    }));
    this.lazyLoad.loading = true;
    this.getHeroes();
  }

  scrollDown() {
    if (this.lazyLoad.totalRecords - ((this.lazyLoad.page + 1) * this.paramsPaginationHeroes.limit) < 0) {
      this.endHeroes = true;
      return;
    }
    this.endHeroes = false;
    this.lazyLoad.page++;
    this.paramsPaginationHeroes.offset = this.lazyLoad.page * this.paramsPaginationHeroes.limit;
    this.paramsPaginationHeroes.rows = this.lazyLoad.page + this.paramsPaginationHeroes.limit;
    this.lazyLoad.lazyLoad(this.paramsPaginationHeroes);
  }

  getHeroes() {
    this.marvelHeroesService.getHeroes(this.paramsPaginationHeroes).toPromise().then((returnQuery: any) => {
      returnQuery.data.results.forEach(heroe => {
        heroe.favorite = false;
        this.heroes.push(heroe);
      });
      this.lazyLoad.totalRecords = returnQuery.data.total;
      this.lazyLoad.loading = false;
    }).catch (error => {
      console.log(error);
      this.lazyLoad.error = true;
    });
  }

  marcarFavorito(valor: boolean, index: number) {
    this.heroes[index].favorite = !this.heroes[index].favorite;
    const status = valor ? 'MARCADO como Favorito!' : 'DESMARCADO dos Favoritos!';
    const snackBarRef = this.snackBar.open('Personagem ' + status, 'Desfazer', this.createConfigSnackbar());

    snackBarRef.onAction().subscribe(() => this.heroes[index].favorite = !this.heroes[index].favorite);
  }

  createConfigSnackbar() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    return config;
  }

  imgLoad(thumbnail) {
    if (thumbnail === null) {
      return '../../../assets/images/image_not_available.jpg';
    }
    if (thumbnail.path.includes('image_not_available')) {
      return '../../../assets/images/image_not_available.jpg';
    } else {
      return thumbnail.path + '.' + thumbnail.extension;
    }
  }

  orderBy(by: string) {
    this.heroes = [];
    this.paramsPaginationHeroes.orderBy = by;
    this.lazyLoad.page = -1;
    this.lazyLoad.loading = true;
    this.scrollDown();
  }

  orderByName(by: string) {
    this.heroes = [];
    this.paramsPaginationHeroes.orderByName = by;
    this.lazyLoad.page = -1;
    this.lazyLoad.loading = true;
    this.scrollDown();
  }

  searchBy(word: string) {
    this.heroes = [];
    this.paramsPaginationHeroes.searchBy = word;
    this.lazyLoad.page = -1;
    this.lazyLoad.searchWord = word;
    this.lazyLoad.loading = true;
    this.scrollDown();
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParamsPagination } from '../../models/params-pagination.model';
import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';
import { DateFormatUtilService } from '../../shared/utils/date-format/date-format-util.service';
import { LazyLoadUtilClass } from '../../shared/utils/lazy-load/lazy-load-util.class';
import { ScrolledService } from '../../shared/utils/scrolled/scrolled.service';
import { NavigationService } from '../../shared/utils/navigation/navigation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  paramsPaginationComics: ParamsPagination = new ParamsPagination(0, 10, '-', 'modified');
  paramsPaginationSeries: ParamsPagination = new ParamsPagination(0, 10, '-', 'modified');
  paramsPaginationStories: ParamsPagination = new ParamsPagination(0, 10, '-', 'modified');
  lazyLoadComics: LazyLoadUtilClass;
  lazyLoadSeries: LazyLoadUtilClass;
  lazyLoadStories: LazyLoadUtilClass;
  substription: Subscription[] = [];
  character: any;
  idCharacter: string;
  nameCharacter: string;
  selectedTab = 0;
  comics: any[] = [];
  stories: any[] = [];
  series: any[] = [];
  endComics: boolean;
  endSeries: boolean;
  endStories: boolean;

  constructor(
    public marvelHeroesService: MarvelHeroesService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dateUtil: DateFormatUtilService,
    public scrolledService: ScrolledService,
    private route: ActivatedRoute,
    public navigate: NavigationService
  ) {}

  ngOnInit() {
    this.lazyLoadComics = new LazyLoadUtilClass();
    this.lazyLoadSeries = new LazyLoadUtilClass();
    this.lazyLoadStories = new LazyLoadUtilClass();
    this.substription.push(this.lazyLoadComics.searchData.subscribe(returnQuery => {
      this.getComics();
    }));
    this.substription.push(this.lazyLoadSeries.searchData.subscribe(returnQuery => {
      this.getSeries();
    }));
    this.substription.push(this.lazyLoadStories.searchData.subscribe(returnQuery => {
      this.getStories();
    }));
    this.substription.push(this.scrolledService.scrollDown.subscribe(returnQuery => {
      this.scrollDown();
    }));
    this.route.params.subscribe(routeParam => {
      this.nameCharacter = routeParam.name;
      this.idCharacter = routeParam.id;
    });
    this.lazyLoadComics.loading = true;
    this.getComics();
  }

  scrollDown() {
    switch (this.selectedTab) {
      case 0:
        if (this.lazyLoadComics.totalRecords - ((this.lazyLoadComics.page + 1) * this.paramsPaginationComics.limit) < 0) {
          this.endComics = true;
          return;
        }
        this.endComics = false;
        this.lazyLoadComics.page++;
        this.paramsPaginationComics.offset = this.lazyLoadComics.page * this.paramsPaginationComics.limit;
        this.paramsPaginationComics.rows = this.lazyLoadComics.page + this.paramsPaginationComics.limit;
        this.lazyLoadComics.lazyLoad(this.paramsPaginationComics);
        break;
      case 1:
        if (this.lazyLoadSeries.totalRecords - ((this.lazyLoadSeries.page + 1) * this.paramsPaginationSeries.limit) < 0) {
          this.endSeries = true;
          return;
        }
        this.endSeries = false;
        this.lazyLoadSeries.page++;
        this.paramsPaginationSeries.offset = this.lazyLoadSeries.page * this.paramsPaginationSeries.limit;
        this.paramsPaginationSeries.rows = this.lazyLoadSeries.page + this.paramsPaginationSeries.limit;
        this.lazyLoadSeries.lazyLoad(this.paramsPaginationSeries);
        break;
      case 2:
        if (this.lazyLoadStories.totalRecords - ((this.lazyLoadStories.page + 1) * this.paramsPaginationStories.limit) < 0) {
          this.endStories = true;
          return;
        }
        this.endStories = false;
        this.lazyLoadStories.page++;
        this.paramsPaginationStories.offset = this.lazyLoadStories.page * this.paramsPaginationStories.limit;
        this.paramsPaginationStories.rows = this.lazyLoadStories.page + this.paramsPaginationStories.limit;
        this.lazyLoadStories.lazyLoad(this.paramsPaginationStories);
        break;
    }
  }

  tabChange() {
    switch (this.selectedTab) {
      case 0:
        this.lazyLoadComics.loading = true;
        this.getComics();
        break;
      case 1:
        this.lazyLoadSeries.loading = true;
        this.getSeries();
        break;
      case 2:
        this.lazyLoadStories.loading = true;
        this.getStories();
        break;
    }
  }

  getComics() {
    this.marvelHeroesService.getComics(this.idCharacter, this.paramsPaginationComics).toPromise().then((returnQuery: any) => {
      returnQuery.data.results.forEach(comic => {
        comic.favorite = false;
        comic.reader = false;
        comic.free = false;
        for (let i = 0; i < comic.urls.length; i++) {
          const url = comic.urls[i];
          if (url.type === 'reader') {
            comic.reader = true;
            break;
          }
        }
        for (let j = 0; j < comic.prices.length; j++) {
          const prices = comic.prices[j];
          if (prices.price === 0) {
            comic.free = true;
            break;
          }
        }
        this.lazyLoadComics.totalRecords = returnQuery.data.total;
        this.comics.push(comic);
      });
      this.lazyLoadComics.loading = false;
    }).catch (error => {
      this.lazyLoadComics.error = true;
    });
  }

  getSeries() {
    this.marvelHeroesService.getSeries(this.idCharacter, this.paramsPaginationSeries).toPromise().then((returnQuery: any) => {
      returnQuery.data.results.forEach(serie => {
        serie.favorite = false;
        this.lazyLoadSeries.totalRecords = returnQuery.data.total;
        this.series.push(serie);
      });
      this.lazyLoadSeries.loading = false;
    }).catch (error => {
      this.lazyLoadSeries.error = true;
    });
  }

  getStories() {
    this.marvelHeroesService.getStories(this.idCharacter, this.paramsPaginationStories).toPromise().then((returnQuery: any) => {
      returnQuery.data.results.forEach(storie => {
        storie.favorite = false;
        this.lazyLoadStories.totalRecords = returnQuery.data.total;
        this.stories.push(storie);
      });
      this.lazyLoadStories.loading = false;
    }).catch (error => {
      this.lazyLoadStories.error = true;
    });
  }

  marcarFavorito(valor: boolean, object: any) {
    object.favorite = !object.favorite;
    const status = valor ? 'MARCADO como Favorito!' : 'DESMARCADO dos Favoritos!';
    const snackBarRef = this.snackBar.open('Personagem ' + status, 'Desfazer', this.createConfigSnackbar());

    snackBarRef.onAction().subscribe(() => object.favorite = !object.favorite);
  }

  createConfigSnackbar() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    return config;
  }

  read(digitalId: number) {
    this.navigate.openNewTabAndRedirect('https://read.marvel.com/#/book/' + digitalId);
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
    switch (this.selectedTab) {
      case 0:
        this.comics = [];
        this.paramsPaginationComics.orderBy = by;
        this.lazyLoadComics.page = -1;
        this.lazyLoadComics.loading = true;
        break;
      case 1:
        this.series = [];
        this.paramsPaginationSeries.orderBy = by;
        this.lazyLoadSeries.page = -1;
        this.lazyLoadSeries.loading = true;
        break;
      case 2:
        this.stories = [];
        this.paramsPaginationStories.orderBy = by;
        this.lazyLoadStories.page = -1;
        this.lazyLoadStories.loading = true;
        break;
    }
    this.scrollDown();
  }

  orderByName(by: string) {
    switch (this.selectedTab) {
      case 0:
        this.comics = [];
        this.paramsPaginationComics.orderByName = by;
        this.lazyLoadComics.page = -1;
        this.lazyLoadComics.loading = true;
        break;
      case 1:
        this.series = [];
        this.paramsPaginationSeries.orderByName = by;
        this.lazyLoadSeries.page = -1;
        this.lazyLoadSeries.loading = true;
        break;
      case 2:
        this.stories = [];
        this.paramsPaginationStories.orderByName = by;
        this.lazyLoadStories.page = -1;
        this.lazyLoadStories.loading = true;
        break;
    }
    this.scrollDown();
  }

  searchBy(word: string) {
    switch (this.selectedTab) {
      case 0:
        this.comics = [];
        this.paramsPaginationComics.searchBy = word;
        this.lazyLoadComics.searchWord = word;
        this.lazyLoadComics.page = -1;
        this.lazyLoadComics.loading = true;
        break;
      case 1:
        this.series = [];
        this.paramsPaginationSeries.searchBy = word;
        this.lazyLoadSeries.searchWord = word;
        this.lazyLoadSeries.page = -1;
        this.lazyLoadSeries.loading = true;
        break;
      case 2:
        this.stories = [];
        this.paramsPaginationStories.searchBy = word;
        this.lazyLoadStories.searchWord = word;
        this.lazyLoadStories.page = -1;
        this.lazyLoadStories.loading = true;
        break;
    }
    this.scrollDown();
  }

}

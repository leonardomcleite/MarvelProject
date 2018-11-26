import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { ParamsPagination } from '../../models/params-pagination.model';
import { CharactersService } from '../../services/characters/characters.service';
import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';
import { DateFormatUtilService } from '../../shared/utils/date-format/date-format-util.service';
import { LazyLoadUtilClass } from '../../shared/utils/lazy-load/lazy-load-util.class';
import { ScrolledService } from '../../shared/utils/scrolled/scrolled.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'heroes-and-villains',
  templateUrl: './heroes-and-villains.component.html',
  styleUrls: ['./heroes-and-villains.component.scss'],
  animations: [
    trigger('barFilterPosition', [
      state('1', style({
        'position': 'fixed',
        'top': '48px',
        'margin-bottom': '50px',
        'z-index': '999',
        'width': '100%',
      })),
    ]),
    trigger('animationCard', [
      transition(':enter', [
        style({ transform: 'translateY(50%)' }),
        animate('.3s', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('.3s', style({ transform: 'translateY(50%)' }))
      ])
    ])
  ],
})
export class HeroesAndVillainsComponent implements OnInit, OnDestroy {

  heroes: any[] = [];
  dataCharacters: any[] = [];
  paramsPaginationHeroes: ParamsPagination = new ParamsPagination(0, 10, '-', 'modified');
  lazyLoad: LazyLoadUtilClass;
  subscription: Subscription[] = [];
  endHeroes: boolean;
  fixar = '0';

  constructor(
    public marvelHeroesService: MarvelHeroesService,
    public charactersService: CharactersService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dateUtil: DateFormatUtilService,
    public scrolledService: ScrolledService
  ) {}

  ngOnInit() {
    this.dataCharacters = this.charactersService.getHeroes();
    this.lazyLoad = new LazyLoadUtilClass();
    this.subscription.push(this.lazyLoad.searchData.subscribe(returnQuery => {
      this.getHeroes();
    }));
    this.subscription.push(this.scrolledService.scrollDown.subscribe(returnQuery => {
      this.scrollDown();
    }));
    this.subscription.push(this.scrolledService.fixedPosition.subscribe(returnQuery => {
      this.getElementOffset(returnQuery);
    }));
    this.lazyLoad.loading = true;
    this.getHeroes();
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
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

  getElementOffset(valor) {
    this.fixar = valor;
  }

  getHeroes() {
    this.marvelHeroesService.getHeroes(this.paramsPaginationHeroes).toPromise().then((returnQuery: any) => {
      returnQuery.data.results.forEach(heroe => {
        heroe.favorite = false;
        for (let i = 0; i < this.dataCharacters.length; i++) {
          const statistics = this.dataCharacters[i];
          if (heroe.name.toUpperCase() === statistics.name.toUpperCase()) {
            heroe.durability = statistics.durability;
            heroe.energy = statistics.energy;
            heroe.combat = statistics.combat;
            heroe.intelligence = statistics.intelligence;
            heroe.speed = statistics.speed;
            heroe.strength = statistics.strength;
            heroe.biography = statistics.biography;
            break;
          }
        }
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

    this.subscription.push(snackBarRef.onAction().subscribe(() => this.heroes[index].favorite = !this.heroes[index].favorite));
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
  }

  deParaCarater(carater: string) {
    switch (carater) {
      case 'good':
        return 'Bom';
      case 'bad':
        return 'Mau';
      case 'neutral':
        return 'Neutro';
      default:
        return 'Neutro';
    }
  }

}

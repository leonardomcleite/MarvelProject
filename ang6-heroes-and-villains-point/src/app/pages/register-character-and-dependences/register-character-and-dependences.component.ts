import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';
import { MarvelHeroesService } from '../../services/marvel-heroes/marvel-heroes.service';
import { ParamsPagination } from '../../models/params-pagination.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register-character-and-dependences',
  templateUrl: './register-character-and-dependences.component.html',
  styleUrls: ['./register-character-and-dependences.component.scss']
})

export class RegisterCharacterAndDependencesComponent {

  paramsPaginationHeroes: ParamsPagination = new ParamsPagination(0, 100, '-', 'modified');
  characters: any = [];
  dataCharacters: any;

  constructor(
    public marvelHeroesService: MarvelHeroesService,
    public charactersService: CharactersService,
  ) {}

  clickGet() {
    const total = 0;
    const cont = 100;
    this.dataCharacters = this.charactersService.getHeroes();
    this.getHeroes(total, cont);
  }
  getHeroes(total, cont) {
    this.marvelHeroesService.getHeroes(this.paramsPaginationHeroes).toPromise().then((returnQuery: any) => {
      total = returnQuery.data.total;
      returnQuery.data.results.forEach(heroe => {
        heroe.pathThumbnail = heroe.thumbnail.path + '.' + heroe.thumbnail.extension;
        heroe.favorite = '0';
        for (let i = 0; i < this.dataCharacters.length; i++) {
          const statistics = this.dataCharacters[i];
          heroe.classification = {};
          if (heroe.name.toUpperCase() === statistics.name.toUpperCase()) {
            heroe.classification.durability = statistics.durability;
            heroe.classification.energy = statistics.energy;
            heroe.classification.combat = statistics.combat;
            heroe.classification.intelligence = statistics.intelligence;
            heroe.classification.speed = statistics.speed;
            heroe.classification.strength = statistics.strength;
            heroe.classification.genius = '';
            heroe.biography = statistics.biography;
            break;
          }
        }
        delete heroe.comics;
        delete heroe.events;
        delete heroe.series;
        delete heroe.stories;
        delete heroe.creators;
        this.characters.push(heroe);
      });
      this.paramsPaginationHeroes.offset = cont;
      if (total >= cont) {
        cont += 100;
        this.getHeroes(total, cont);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  save() {
    this.charactersService.createCharacters(this.characters).toPromise().then((returnQuery: any) => {
      console.log(this.characters);
    });
  }
}

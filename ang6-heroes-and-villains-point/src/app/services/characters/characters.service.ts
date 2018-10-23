import { Injectable } from '@angular/core';
import { CharacterModel } from '../../models/character.model';
import { REST_PATH } from '../../shared/utils/endpoints/app.config';
import { PropertyProviderService, _HTTP_URL_BACK_END_APP } from '../base-service/property-provider.service';
import { RestClientService } from '../base-service/rest-client.service';
import { ParamsPagination } from '../../models/params-pagination.model';

@Injectable()
export class CharactersService {

  personagens = require('../../../assets/base-personagens.json');
  baseBackEnd: string;

  constructor(
    public restClientService: RestClientService,
    public propertyProvider: PropertyProviderService,
  ) {
    this.baseBackEnd = this.propertyProvider.getProperty(_HTTP_URL_BACK_END_APP);
  }

  getHeroes(paramsPagination?: ParamsPagination): any {
    return this.personagens;
  }

  /**
   *
   */
  createCharacters(characters: CharacterModel[]): any {
    return this.restClientService.post(this.baseBackEnd + REST_PATH.character.create, characters);
  }

  /**
   *
   */
  listCharacters(id?: number): any {
    if (id !== undefined) {
      return this.restClientService.get(this.baseBackEnd + REST_PATH.character.list);
    } else {
      return this.restClientService.get(this.baseBackEnd + REST_PATH.character.list + '/' + id);
    }
  }

  /**
   *
   */
  delteCharacter(id: number): any {
    return this.restClientService.delete(this.baseBackEnd + REST_PATH.character.delete + '/' + id);
  }

}

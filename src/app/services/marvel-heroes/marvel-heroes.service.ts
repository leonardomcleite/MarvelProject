import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsPagination } from '../../models/params-pagination.model';
import { PropertyProviderService, _HTTP_URL_BASE_MARVEL } from '../base-service/property-provider.service';
import { RestClientService } from '../base-service/rest-client.service';

@Injectable()
export class MarvelHeroesService {

  baseMarvel: string;
  appKey: string;

  constructor(
    public http: HttpClient,
    public propertyProvider: PropertyProviderService,
    public restClientService: RestClientService
  ) {
    this.baseMarvel = this.propertyProvider.getProperty(_HTTP_URL_BASE_MARVEL);
    this.appKey = this.propertyProvider.getAppKey();
  }

  /**
   * Listagem e busca de heroes, segundo critérios
   */
  getHeroes(paramsPagination: ParamsPagination): any {
    let params = 'characters?';
    params += 'limit=' + paramsPagination.limit;
    params += '&offset=' + paramsPagination.offset;
    params += '&orderBy=' + paramsPagination.orderBy + paramsPagination.orderByName;
    paramsPagination.searchBy === null ? paramsPagination.searchBy = null : params += '&nameStartsWith=' + paramsPagination.searchBy;
    params += '&apikey=' + this.appKey;

    return this.http.get(this.baseMarvel + params);
  }

  /**
   * Busca personagem especio, segundo critérios
   */
  getComics(idCharacter: string, paramsPagination: ParamsPagination): any {
    let params = 'characters/';
    params += idCharacter;
    params += '/comics';
    params += '?limit=' + paramsPagination.limit;
    params += '&offset=' + paramsPagination.offset;
    params += '&orderBy=' + paramsPagination.orderBy + paramsPagination.orderByName;
    paramsPagination.searchBy === null ? paramsPagination.searchBy = null : params += '&nameStartsWith=' + paramsPagination.searchBy;
    params += '&apikey=' + this.appKey;

    return this.http.get(this.baseMarvel + params);
  }

  /**
   * Busca personagem especio, segundo critérios
   */
  getSeries(idCharacter: string, paramsPagination: ParamsPagination): any {
    let params = 'characters/';
    params += idCharacter;
    params += '/series';
    params += '?limit=' + paramsPagination.limit;
    params += '&offset=' + paramsPagination.offset;
    params += '&orderBy=' + paramsPagination.orderBy + paramsPagination.orderByName;
    paramsPagination.searchBy === null ? paramsPagination.searchBy = null : params += '&nameStartsWith=' + paramsPagination.searchBy;
    params += '&apikey=' + this.appKey;

    return this.http.get(this.baseMarvel + params);
  }

  /**
   * Busca personagem especio, segundo critérios
   */
  getStories(idCharacter: string, paramsPagination: ParamsPagination): any {
    let params = 'characters/';
    params += idCharacter;
    params += '/stories';
    params += '?limit=' + paramsPagination.limit;
    params += '&offset=' + paramsPagination.offset;
    params += '&orderBy=' + paramsPagination.orderBy + paramsPagination.orderByName;
    paramsPagination.searchBy === null ? paramsPagination.searchBy = null : params += '&nameStartsWith=' + paramsPagination.searchBy;
    params += '&apikey=' + this.appKey;

    return this.http.get(this.baseMarvel + params);
  }

}

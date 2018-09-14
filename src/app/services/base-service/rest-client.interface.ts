import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PathModel } from '../../models/path.model';
import { CustomHttpEventObserverService } from './custom-http-event-observer.service';
import { PropertyProviderService, _HTTP_URL_BASE_MARVEL } from './property-provider.service';
import { RequestModifierService } from './request-modifier.service';

export interface RestClientSender {
    send(): Observable<any>;
}

export interface BodyRestClientBuilder {
    body(body: any): RestClientSender;
    addHeader(name: string, value: string): BodyRestClientBuilder & RestClientSender;
    addParam(name: string, value: string): BodyRestClientBuilder & RestClientSender;
}

export interface URLRestClientBuilder {
    url(url: string | PathModel): BodyRestClientBuilder & RestClientSender;
}

export interface RestRequestBuilder {
    json(): URLRestClientBuilder;
    url(url: string | PathModel): BodyRestClientBuilder & RestClientSender;
}

export class RESTClientBuilder implements RestRequestBuilder, URLRestClientBuilder, RestClientSender, BodyRestClientBuilder {

   _headers: HttpHeaders = new HttpHeaders();
   _search: HttpParams = new HttpParams();
   _url: string;
   _body: any;

   _withCustomProperties = false;
   _requestBodyTransform: Function = (value: any) => value;
   _responseBodyTransform: Function = (value: any) => value;

    constructor(
       public http: HttpClient,
       public _method: RequestMethod,
       public _httpEvent: CustomHttpEventObserverService,
       public propertyProvider: PropertyProviderService,
       public requestModifier: RequestModifierService,
       public router: Router
    ) {}

    json(): URLRestClientBuilder {
        this._headers.set('Content-Type', 'application/json');
        this._requestBodyTransform = (value: any) => {
            if (!(typeof value === 'string')) {
                value = JSON.stringify(value);
            }
            return value;
        };
        this._responseBodyTransform = (result: Response) => {
            return result.text() === '' ? null : result.json();
        };
        return this;
    }

    url(path: string | PathModel): BodyRestClientBuilder & RestClientSender {
        // let url: string = this.propertyProvider.getProperty(_HTTP_URL_BASE_MARVEL);
        // if (!url) {
        //     throw new Error('Please define the \'_HTTP_URL_BASE_MARVEL\' property within your implementation of PropertyProvider');
        // }

        // url = url.endsWith('/') ? url.substring(0, url.length - 1) : url;
        // this._url = url + path.toString();
        this._url = path.toString();
        return this;
    }

    withCustomProperties(): RESTClientBuilder {
        this._withCustomProperties = true;
        return this;
    }

    addHeader(name: string, value: string): BodyRestClientBuilder & RestClientSender {
        this._headers.set(name, value);
        return this;
    }

    addParam(name: string, value: string): BodyRestClientBuilder & RestClientSender {
        this._search.set(name, value);
        return this;
    }

    body(body: any): RestClientSender {
        this._body = body;
        return this;
    }

    send(): Observable<any> {
        let o: any = null;

        if (this._withCustomProperties && this.requestModifier) {
            this.requestModifier.setCustomProperties(this);
        }

        this._httpEvent.beforeRequest.next();
        switch (this._method) {
            case RequestMethod.Get:
                o = this.http.get(this._url, {headers: this._headers, params: this._search});
                break;
            case RequestMethod.Post:
                o = this.http.post(this._url, this._requestBodyTransform(this._body), {headers: this._headers, params: this._search});
                break;
            case RequestMethod.Put:
                o = this.http.put(this._url, this._requestBodyTransform(this._body), {headers: this._headers, params: this._search});
                break;
            case RequestMethod.Delete:
                o = this.http.delete(this._url, {headers: this._headers, params: this._search});
                break;
        }
        o = o.map(r => this._responseBodyTransform(r))
            .catch(e => this.handleError(this._method, e))
            .finally(() => this._httpEvent.afterRequest.next());
        return o;
    }

   handleError(method: RequestMethod, error: Response): Observable<any> {
        let errorBody: any;
        switch (error.status) {
            case 400:
                errorBody = {
                    title: 'Erro',
                    code: 400,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Solicitação inválida'
                };
                break;
            case 401:
                errorBody = {
                    title: 'Erro',
                    code: 401,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Usuário não autorizado'
                };
                break;
            case 404:
                errorBody = {
                    title: 'Erro',
                    code: 404,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Página não encontrada'
                };
                break;
            case 0:
                errorBody = {
                    title: 'Erro',
                    code: 0,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Erro na integração do sistema'
                };
                break;
            case 500:
                errorBody = {
                    title: 'Erro',
                    code: 500,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Erro interno no servidor'
                };
                console.log(error);
                break;
            case 501:
            case 502:
            case 503:
                errorBody = {
                    title: 'Erro',
                    code: 503,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Serviço indisponível'
                };
                break;
            case 504:
                errorBody = {
                    title: 'Erro',
                    code: 504,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Conexão expirada'
                };
                break;
            default:
                errorBody = {
                    title: 'Erro',
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Erro na integração do sistema'
                };
                console.log(error);
        }
        return Observable.throw(errorBody);
    }

   getErrorBody(error: Response) {
        let errorBody: any;
        try {
            errorBody = error.json(); // gera exceção se json não é válido
        } catch (e) {
            errorBody = error.toString();
        }
        return errorBody;
    }

}

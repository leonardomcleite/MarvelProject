import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, finalize } from 'rxjs/operators';
import { OptionsNotification } from '../../models/options-notifications.model';
import { PathModel } from '../../models/path.model';
import { CustomHttpEventObserverService } from './custom-http-event-observer.service';
import { NotificationService } from './notification.service';
import { PropertyProviderService } from './property-provider.service';
import { RequestModifierService } from './request-modifier.service';
import { HandleErrorService } from './handle-error.service';

export interface RestClientSender {
  send(): Observable < any > ;
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

  messageOptions: OptionsNotification;

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
    public router: Router,
    public notificationService: NotificationService,
    public handleErrorService: HandleErrorService,
  ) {}

  json(): URLRestClientBuilder {
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

  send(): Observable < any > {
    let o: Observable<any>;

    this._httpEvent.beforeRequest.next();
    switch (this._method) {
      case RequestMethod.Get:
        o = this.http.get(this._url);
        break;
      case RequestMethod.Post:
        o = this.http.post(this._url, this._body);
        break;
      case RequestMethod.Put:
        o = this.http.put(this._url, this._body);
        break;
      case RequestMethod.Delete:
        o = this.http.delete(this._url);
        break;
    }
    o = o.pipe(
      catchError(error => of(this.handleError(this._method, error))),
      finalize(() => this._httpEvent.afterRequest.next())
    );
    return o;
  }

  handleError(method: RequestMethod, error): Observable < any > {
    const returnHadleService = this.handleErrorService.getErrorByCode(error, method);
    this.messageOptions = new OptionsNotification(
      `<span class="title-notification"><b style="color: black">Erro:</b> ${returnHadleService.code}</span>` +
      `<span class="notification-content"><b style="color: black">Descrição:</b> ${returnHadleService.message}</span>` +
      `<span class="notification-content"><b style="color: black">Url:</b> ${returnHadleService.method} - ${returnHadleService.url}</span>`
    , 'error', null, false, 'top', 'right', 500000);
    this.notification(this.messageOptions);
    console.log(error);
    return Observable.throw(error);
  }

  notification(options: OptionsNotification) {
    this.notificationService.notification(options);
  }

}

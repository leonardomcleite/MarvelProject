import { Injectable } from '@angular/core';
import { BodyRestClientBuilder } from './rest-client.interface';

@Injectable()
export abstract class RequestModifierService {

    public abstract setCustomProperties(restClientBuilder: BodyRestClientBuilder): void;

}

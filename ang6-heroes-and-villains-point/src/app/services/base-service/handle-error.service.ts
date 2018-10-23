import { Injectable } from '@angular/core';
import { ErrorBody } from '../../models/error-body.model';

@Injectable()
export class HandleErrorService {

  getErrorByCode(error: any, method) {
    let errorBody: ErrorBody;
    switch (error.status) {
      case 400:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Solicitação inválida',
          error.error
        );
        break;
      case 401:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Usuário não autorizado',
          error.error
        );
        break;
      case 404:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Página não encontrada',
          error.error
        );
        break;
      case 0:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Erro na integração do sistema',
          error.error
        );
        break;
      case 500:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Erro interno no servidor',
          error.error
        );
        console.log(error);
        break;
      case 501:
      case 502:
      case 503:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Serviço indisponível',
          error.error
        );
        break;
      case 504:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Conexão expirada',
          error.error
        );
        break;
      default:
        errorBody = new ErrorBody(
          'Erro',
          error.status,
          method,
          error.url,
          'Erro na integração do sistema',
          error.error
        );
    }
    return errorBody;
  }
}

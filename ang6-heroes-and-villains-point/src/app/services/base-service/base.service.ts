import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseParamsService } from './base-params.service';

@Injectable()
export abstract class BaseService {

  constructor(
    protected baseServiceParams: BaseParamsService
  ) {}

  public handleError(error: any): Observable < any > {
    if (error.code === undefined) {
      this.baseServiceParams.notificationService.error({
        title: 'Erro ' + error.status,
        message: this.mapErrors(error.status)
      });
      return;
    }
    const args: any[] = error.arguments;
    if (args && args.length) {
      for (const a of args) {
        const message = (a.detail) ? `${a.message} - ${a.detail}` : a.message;
        this.baseServiceParams.notificationService.error({
          title: 'Erro ' + error.code,
          message: error.message
        });
      }
      return;
    }
    this.baseServiceParams.notificationService.error({
      title: 'Erro ' + error.code,
      message: error.message
    });
  }

  mapErrors(status: any) {
    switch (status) {
      case 400:
        return 'Solicitação inválida';
      case 401:
        return 'Usuário não autorizado';
      case 404:
        return 'Página não encontrada';
      case 500:
        return 'Erro interno no servidor';
      case 503:
        return 'Serviço indisponível';
      case 504:
        return 'Conexão expirada';
      default:
        return 'Erro na integração do sistema';
    }
  }

}

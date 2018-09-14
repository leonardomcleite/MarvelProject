import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatUtilService {

  formatDate(date: any, typeFormat: string) {
    if (date === null) {
      return;
    }
    if (typeof date === 'string') {
      date = new Date(date);
    }
    let options;
    switch (typeFormat) {
      case 'dd/mm/yyyy':
        options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        break;
      case 'dd/mm/yyyy hh':
        options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit'};
        break;
      case 'dd/mm/yyyy hh:mm':
        options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};
        break;
      case 'dd/mm/yyyy hh:mm:ss':
        options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
        break;
      default:
        options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
        break;
    }
    return date.toLocaleDateString('pt-BR', options);
  }

}

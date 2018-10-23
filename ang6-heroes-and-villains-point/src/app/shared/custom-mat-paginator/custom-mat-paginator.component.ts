import { MatPaginatorIntl } from '@angular/material';

export class CustomPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    // this.nextPageLabel = ' My new label for next page';
    // this.previousPageLabel = ' My new label for previous page';
    this.itemsPerPageLabel = 'Resultados por página';
  }
}

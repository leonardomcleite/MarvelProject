import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CopierService } from '../../services/copier/copier.service';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loader: boolean;

  constructor(
    private snackbar: MatSnackBar,
    private copier: CopierService,
    public charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.loader = false;
    // this.charactersService.test().toPromise().then(retorno => {
    //   console.log(retorno);
    // });
  }

  copySource(text: string) {
    if (this.copier.copyText(text)) {
      this.snackbar.open('Code copied', '', {duration: 2500});
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', {duration: 2500});
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PlayedModel } from 'src/app/models/played.model';
import { UserPersonalData } from 'src/app/models/user-personal-data.model';
import { MarvelHeroesService } from 'src/app/services/marvel-heroes/marvel-heroes.service';
import { OptionsNotification } from '../../../models/options-notifications.model';
import { NotificationService } from '../../../services/base-service/notification.service';
import { CharactersService } from '../../../services/characters/characters.service';
import { GameService } from '../../../services/game/game.service';
import { DateFormatUtilService } from '../../../shared/utils/date-format/date-format-util.service';
import { ScrolledService } from '../../../shared/utils/scrolled/scrolled.service';
import { ParamsPagination } from 'src/app/models/params-pagination.model';

enum Stage {
  Start = 0,
  InGame = 1,
  EndGame = 2,
  GameOver = 3
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.scss']
})
export class InGameComponent implements OnInit {

  // userLogged: UserPersonalData;
  // players: any[] = [];
  // numberCards = 10;
  // loading: boolean;
  // error: boolean;
  // isMyTurn: boolean;
  // lobby: any;

  playerOne: any[] = [];
  playerTwo: any[] = [];
  numberCards = 10;
  dataCharacters: any[] = [];
  paramsPaginationHeroes: ParamsPagination = new ParamsPagination(0, 100, '-', 'modified');
  loading: boolean;
  error: boolean;
  stageGame: number;
  last = 330;
  turn = 0;
  timeLeft = 60;
  interval;
  totalRecords: any;
  vez = true;

  constructor(
    public charactersService: CharactersService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public dateUtil: DateFormatUtilService,
    public scrolledService: ScrolledService,
    public gameService: GameService,
    public notificationService: NotificationService,
    public marvelHeroesService: MarvelHeroesService,
  ) {}

  // ngOnInit() {
  //   this.userLogged = JSON.parse(sessionStorage.getItem('Perfis'));
  //   this.isMyTurn = this.gameService.roundPlayer(this.userLogged);
  //   this.buildLobby();
  // }

  // buildLobby() {
  //   this.gameService.enterGame(this.userLogged).toPromise().then((returnQuery: any) => {
  //     this.lobby = returnQuery;
  //   }).catch (error => {
  //     this.error = true;
  //   });
  // }

  // imgLoad(thumbnail?: any) {
  //   if (thumbnail === null || thumbnail === undefined) {
  //     return '../../../assets/images/image_not_available.jpg';
  //   }
  //   if (thumbnail.path.includes('image_not_available')) {
  //     return '../../../assets/images/image_not_available.jpg';
  //   } else {
  //     return thumbnail.path + '.' + thumbnail.extension;
  //   }
  // }

  // makeMove(feature: String) {
  //   this.gameService.roundPlayer(this.userLogged).toPromise().then(returnQuery => {
  //     this.isMyTurn = returnQuery;
  //     if (this.isMyTurn) {
  //       this.players.forEach(player => {
  //         if (player.id !== this.userLogged.id) {
  //           player.side = !player.side;
  //         }
  //       });
  //       const played = new PlayedModel(feature, this.userLogged);
  //       this.gameService.makeMove(played).toPromise().then(() => {
  //         this.gameService.roundWinner(this.userLogged).toPromise().then(returnQueryWinner => {
  //           switch (returnQueryWinner) {
  //             case 'win':
  //               this.playerResult('win');
  //               break;
  //             case 'lost':
  //               this.playerResult('lost');
  //               break;
  //             case 'tie':
  //               this.endedInATie();
  //               break;
  //           }
  //         });
  //       });
  //     }
  //   });
  // }

  // endedInATie(): any {
  //   this.gameService.stageGame().toPromise().then(returnQuery => {
  //     this.gameService.turnGame = returnQuery;
  //   });
  //   if (this.isMyTurn) {
  //     this.players.forEach(player => {
  //       if (player.id !== this.userLogged.id) {
  //         player.side = !player.side;
  //       }
  //     });
  //   }
  //   const messageOptions: OptionsNotification = new OptionsNotification(`<span class="notification-content">Deu EMPATE!</span>`, 'warning', `<span style="font-weight: bold">OK</span>`, true, 'bottom', 'center', 2000);
  //   this.notificationService.notification(messageOptions);
  // }

  // playerResult(statusGame: any): any {
  //   this.gameService.stageGame().toPromise().then(returnQuery => {
  //     this.gameService.turnGame = returnQuery;
  //   });
  //   this.players.forEach(player => {
  //     player.side = !player.side;
  //   });
  //   let messageOptions: OptionsNotification;
  //   if (statusGame === 'win') {
  //     messageOptions = new OptionsNotification(`<span class="notification-content">Você VENCEU esta rodada!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'bottom', 'center', 2000);
  //     this.notificationService.notification(messageOptions);
  //     setTimeout(() => {
  //       if (this.isMyTurn) {
  //         this.players.forEach(player => {
  //           if (player.id !== this.userLogged.id) {
  //             player.side = !player.side;
  //           }
  //         });
  //       }
  //     }, 1000);
  //   } else {
  //     messageOptions = new OptionsNotification(`<span class="notification-content">Você PERDEU esta rodada!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'bottom', 'center', 2000);
  //     this.notificationService.notification(messageOptions);
  //     setTimeout(() => {
  //       if (this.isMyTurn) {
  //         this.players.forEach(player => {
  //           if (player.id !== this.userLogged.id) {
  //             player.side = !player.side;
  //           }
  //         });
  //       }
  //     }, 1000);
  //   }
  // }

  ngOnInit() {
    this.dataCharacters = this.charactersService.getHeroes();
    this.loading = true;
    this.getHeroes(0, []);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getHeroes(cont: number, heroes: any[]) {
    this.marvelHeroesService.getHeroes(this.paramsPaginationHeroes).toPromise().then((returnQuery: any) => {
      returnQuery.data.results.forEach(heroe => {
        heroe.favorite = false;
        for (let i = 0; i < this.dataCharacters.length; i++) {
          const statistics = this.dataCharacters[i];
          if (heroe.name.toUpperCase() === statistics.name.toUpperCase()) {
            if (
              statistics.durability > 0 ||
              statistics.energy > 0 ||
              statistics.combat > 0 ||
              statistics.intelligence > 0 ||
              statistics.speed > 0 ||
              statistics.strength > 0
            ) {
              heroe.durability = statistics.durability * 1;
              heroe.energy = statistics.energy * 1;
              heroe.combat = statistics.combat * 1;
              heroe.intelligence = statistics.intelligence * 1;
              heroe.speed = statistics.speed * 1;
              heroe.strength = statistics.strength * 1;
              heroe.biography = statistics.biography;
              cont++;
              heroes.push(heroe);
            }
            break;
          }
        }
      });
      if (cont >= (this.numberCards * 2)) {
        this.startGame(heroes);
      } else {
        this.paramsPaginationHeroes.offset += this.paramsPaginationHeroes.limit;
        this.getHeroes(cont, heroes);
      }
    }).catch (error => {
      this.quitGame();
    });
  }

  startGame(returnQuery) {
    for (let i = 0; i < this.numberCards; i++) {
      const index = Math.floor(Math.random() * returnQuery.length);
      returnQuery[index].position = this.calcPosition(50, i);
      this.playerOne.push(returnQuery[index]);
      this.playerOne[i].side = true;
      returnQuery.splice(index, 1);
    }
    this.last = 600;
    for (let i = 0; i < this.numberCards; i++) {
      const index = Math.floor(Math.random() * returnQuery.length);
      returnQuery[index].position = this.calcPosition(100, i);
      this.playerTwo.push(returnQuery[index]);
      this.playerTwo[i].side = true;
      returnQuery.splice(index, 1);
    }
    this.playerOne[0].side = false;
    this.loading = false;
  }

  imgLoad(thumbnail?: any) {
    if (thumbnail === null || thumbnail === undefined) {
      return '../../../assets/images/image_not_available.jpg';
    }
    if (thumbnail.path.includes('image_not_available')) {
      return '../../../assets/images/image_not_available.jpg';
    } else {
      return thumbnail.path + '.' + thumbnail.extension;
    }
  }

  calcPosition(percent: number, i: number) {
    const position = this.last += i + 0.5;
    this.last -= (i + 0.5);
    return 'calc(' + percent + '% - ' + position + 'px)';
  }

  choiceFeature(feature: String, player: string) {
    if ((!this.vez && player === 'player1') || (this.vez && player === 'player2')) {
      return;
    }
    if (this.vez) {
      this.playerTwo[0].side = !this.playerTwo[0].side;
      setTimeout(() => {
        this.cases(feature);
      }, 2000);
    } else {
      this.playerOne[0].side = !this.playerOne[0].side;
      setTimeout(() => {
        this.cases(feature);
      }, 2000);
    }
  }

  cases(feature) {
    switch (feature) {
      case 'intelligence':
        if (this.playerOne[0].intelligence > this.playerTwo[0].intelligence) {
          this.playerResult('win');
        } else if (this.playerOne[0].intelligence === this.playerTwo[0].intelligence) {
          this.endedInATie();
        }  else {
          this.playerResult('lost');
        }
        break;
      case 'strength':
        if (this.playerOne[0].strength > this.playerTwo[0].strength) {
          this.playerResult('win');
        } else if (this.playerOne[0].strength === this.playerTwo[0].strength) {
          this.endedInATie();
        } else {
          this.playerResult('lost');
        }
        break;
      case 'speed':
        if (this.playerOne[0].speed > this.playerTwo[0].speed) {
          this.playerResult('win');
        } else if (this.playerOne[0].speed === this.playerTwo[0].speed) {
          this.endedInATie();
        }  else {
          this.playerResult('lost');
        }
        break;
      case 'durability':
        if (this.playerOne[0].durability > this.playerTwo[0].durability) {
          this.playerResult('win');
        } else if (this.playerOne[0].durability === this.playerTwo[0].durability) {
          this.endedInATie();
        }  else {
          this.playerResult('lost');
        }
        break;
      case 'energy':
        if (this.playerOne[0].energy > this.playerTwo[0].energy) {
          this.playerResult('win');
        } else if (this.playerOne[0].energy === this.playerTwo[0].energy) {
          this.endedInATie();
        }  else {
          this.playerResult('lost');
        }
        break;
      case 'combat':
        if (this.playerOne[0].combat > this.playerTwo[0].combat) {
          this.playerResult('win');
        } else if (this.playerOne[0].combat === this.playerTwo[0].combat) {
          this.endedInATie();
        }  else {
          this.playerResult('lost');
        }
        break;
    }
  }

  endedInATie(): any {
    if (this.vez) {
      if (this.playerTwo.length === 1) {
        this.gameService.turnGame.emit(Stage.EndGame);
      }
      this.playerTwo[0].side = !this.playerTwo[0].side;
    } else {
      if (this.playerOne.length === 1) {
        this.gameService.turnGame.emit(Stage.GameOver);
      }
      this.playerOne[0].side = !this.playerOne[0].side;
    }
    const messageOptions: OptionsNotification = new OptionsNotification(`<span class="notification-content">Deu EMPATE!</span>`, 'warning', `<span style="font-weight: bold">OK</span>`, true, 'bottom', 'center', 2000);
    this.notificationService.notification(messageOptions);
    setTimeout(() => {
    if (this.vez) {
      this.playerTwo.push(this.playerTwo[0]);
      this.playerTwo.shift();
    } else {
      this.playerOne.push(this.playerOne[0]);
      this.playerOne.shift();
    }
    this.vez = !this.vez;
    this.newRound();
    }, 1000);
  }

  playerResult(statusGame: any): any {
    this.playerTwo[0].side = !this.playerTwo[0].side;
    this.playerOne[0].side = !this.playerOne[0].side;
    let messageOptions: OptionsNotification;
    if (statusGame === 'win') {
      messageOptions = new OptionsNotification(`<span class="notification-content">Você VENCEU esta rodada!</span>`, 'success', `<span style="font-weight: bold">OK</span>`, true, 'bottom', 'center', 2000);
      this.notificationService.notification(messageOptions);
      setTimeout(() => {
        this.playerOne.push(this.playerTwo[0]);
        this.playerTwo.shift();
        this.playerOne.push(this.playerOne[0]);
        this.playerOne.shift();

        if (this.vez) {
          this.playerTwo[0].side = !this.playerTwo[0].side;
        } else {
          this.playerOne[0].side = !this.playerOne[0].side;
        }
        this.newRound();
      }, 1000);
    } else {
      messageOptions = new OptionsNotification(`<span class="notification-content">Você PERDEU esta rodada!</span>`, 'error', `<span style="font-weight: bold">OK</span>`, true, 'bottom', 'center', 2000);
      this.notificationService.notification(messageOptions);
      setTimeout(() => {
        this.playerTwo.push(this.playerOne[0]);
        this.playerOne.shift();
        this.playerTwo.push(this.playerTwo[0]);
        this.playerTwo.shift();

        if (this.vez) {
          this.playerTwo[0].side = !this.playerTwo[0].side;
        } else {
          this.playerOne[0].side = !this.playerOne[0].side;
        }
        this.newRound();
      }, 1000);
    }
  }

  newRound() {
    if (this.playerOne.length === 0) {
      this.gameService.turnGame.emit(Stage.GameOver);
      return;
    }
    if (this.playerTwo.length === 0) {
      this.gameService.turnGame.emit(Stage.EndGame);
      return;
    }
    this.last = 330;
    for (let index = 0; index < this.playerOne.length; index++) {
      this.playerOne[index].position = this.calcPosition(50, index);
    }
    this.last = 600;
    for (let index = 0; index < this.playerTwo.length; index++) {
      this.playerTwo[index].position = this.calcPosition(100, index);
    }
    this.turn === 0 ? this.turn = 1 : this.turn = 0;
    this.vez = !this.vez;
  }

  quitGame() {
    this.gameService.turnGame.emit(Stage.Start);
  }

}

import {Component, inject, Signal, ViewChild} from '@angular/core';
import {CreateGameModal} from '../../components/_dialog/create-game-dialog/create-game-modal.component';
import {Router} from '@angular/router';
import {AppInfoService} from '../../service/app-info.service';
import GameDTO = Kubenbois.GameDTO;
import InitAppDTO = Kubenbois.InitAppDTO;

@Component({
  selector: 'app-lobby',
  imports: [
    CreateGameModal
  ],
  templateUrl: './lobby.html',
  styleUrl: './lobby.css'
})
export class Lobby {
  @ViewChild('createGameModal') createGameModal!: CreateGameModal;

  games: Signal<InitAppDTO['games']> = inject(AppInfoService).games;

  constructor(private router: Router) {}

  openCreateGame(game: GameDTO) {
    this.createGameModal.gameName = game.titre;
    this.createGameModal.playerMini = game.playerMini;
    this.createGameModal.playerMax = game.playerMax;
    this.createGameModal.open();
  }

  onGameConfirmed(event: { game: string; players: number }) {
    this.router.navigate(['game', event.game], {queryParams: {players: event.players}}).then();
  }
}

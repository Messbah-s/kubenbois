import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-game-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './create-game-modal.component.html',
  styleUrl: './create-game-modal.component.css'
})
export class CreateGameModal {
  @ViewChild('createGame') createGame!: ElementRef<HTMLDialogElement>;

  @Input({required:true}) gameName: string = '';
  @Input({required:true}) playerMini: number = 2;
  @Input({required:true}) playerMax: number = 4;

  inviteFriend1 = false;
  inviteFriend2 = false;
  inviteFriend3 = false;

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<{ game: string; players: number }>();

  players: number = this.playerMini;

  open() {
    this.players = this.playerMini;
    this.createGame.nativeElement.showModal();
  }

  close() {
    this.createGame.nativeElement.close();
  }

  confirm() {
    this.createGame.nativeElement.close();
    this.confirmed.emit({ game: this.gameName, players: this.players });
  }
}

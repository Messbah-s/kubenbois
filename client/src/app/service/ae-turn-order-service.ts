import {Injectable, signal, WritableSignal} from '@angular/core';
import {Utils} from './utils';

@Injectable({
  providedIn: 'root'
})
export class AeTurnOrderService {
  turnOrder: WritableSignal<string[]> = signal(["1", "2", "3", "4", "Némésis 1", "Némésis 2"]);
  turnPlayed: WritableSignal<string[]> = signal([]);

  constructor(private utils: Utils) {
    this.turnOrder.update(this.utils.shuffle);
  }

  selectTurnOrder() {
    return this.turnOrder;
  }

  selectTurnPlayed() {
    return this.turnPlayed;
  }

  shuffleTurnOrder() {
    this.turnOrder.update(this.utils.shuffle)
  }

  displayNextPlayer() {
    this.turnPlayed().push(this.turnOrder().at(0)!);
    this.turnOrder().shift();
  }

  replayCard(selectedCard: string, index: number) {
    this.turnOrder().push(selectedCard);
    this.turnOrder.update(this.utils.shuffle);
    this.turnPlayed().splice(index, 1)
  }

  resetTurnOrder() {
    this.turnOrder.update(_=> this.utils.shuffle(["1", "2", "3", "4", "Némésis 1", "Némésis 2"]));
    this.turnPlayed.update(_=> []);
  }
}

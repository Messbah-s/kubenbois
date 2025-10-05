import {Component, WritableSignal} from '@angular/core';
import {AeTurnOrderService} from '../../service/ae-turn-order-service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-aeon-end-turn-order',
  imports: [
    NgClass
  ],
  templateUrl: './aeon-end-turn-order.html',
  styleUrl: './aeon-end-turn-order.css'
})
export class AeonEndTurnOrder {
  turnOrder: WritableSignal<string[]>;
  turnPlayed: WritableSignal<string[]>;
  selectedCard: string = "";
  index: number = 0;

  constructor(private aeTurnOrderService: AeTurnOrderService) {
    this.turnOrder = this.aeTurnOrderService.selectTurnOrder();
    this.turnPlayed = this.aeTurnOrderService.selectTurnPlayed();
  }

  displayNextPlayer() {
    this.aeTurnOrderService.displayNextPlayer();
  }

  ResetTurnOrder() {
    this.aeTurnOrderService.resetTurnOrder()
  }

  replayCard() {
    this.aeTurnOrderService.replayCard(this.selectedCard, this.index);
    this.selectedCard = "";
  }

  selectCard(played: string, index: number) {
    this.selectedCard = played;
    this.index = index;
  }
}

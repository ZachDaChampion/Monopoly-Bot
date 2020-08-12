import { Game } from "../game";
import { mention } from "../lib";
import cardLookup from "../lookup/cards";

export class ContextInsufficientFunds implements Context {
  constructor(game: Game, playerId: PlayerId, requiredMoney: number) {
    this.game = game;
    this.playerId = playerId;
    this._requiredMoney = requiredMoney;
    this._payed = false;
  }

  private game: Game;
  private playerId: PlayerId;

  private _requiredMoney: number;
  private _payed: boolean;

  get canExit() {
    return this._payed;
  }

  get player() {
    return this.game.players[this.playerId];
  }

  setup() {}

  enter() {
    this.game.sendMessage(
      `${mention(this.playerId)} owes $${this._requiredMoney}, but only has $${
        this.player.cash
      }. That's ${this._requiredMoney - this.player.cash} short!`
    );
  }

  exit() {
    this.game.sendMessage(
      `${mention(this.playerId)} has paid the necessary $${
        this._requiredMoney
      }.`
    );
  }

  handleCommand(command: Command, properties: Record<string, any>) {
    switch (command) {
      case "OFFER": {
        // TODO: this
        break;
      }

      case "MORTGAGE": {
        switch (this.game.mortgate(properties.id, this.playerId)) {
          case "ALREADY-MORTGAGED":
            this.game.queueMessage(
              `${cardLookup[properties.id].name} is already mortgaged.`
            );
            break;
          case "NOT-OWNER":
            this.game.queueMessage(
              `${mention(
                this.game.cards[properties.id].owner
              )} is the owner of ${
                cardLookup[properties.id].name
              }, so you cannot mortage it.`
            );
            break;
          case "SUCCESS":
            this.game.queueMessage(
              `${mention(this.playerId)} has mortgaged ${
                cardLookup[properties.id].name
              } for $${cardLookup[properties.id].mortgageValue}.`
            );
            break;
        }
        break;
      }

      case "PAY": {
        if (this.player.cash < this._requiredMoney)
          this.game.queueMessage(
            `You're $${this._requiredMoney - this.player.cash} short!`
          );
        else this._payed = true;
        break;
      }
    }
    this.game.sendMessageQueue();
  }
}

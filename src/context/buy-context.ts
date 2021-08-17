import { Game } from "../game";
import { mention, listArray } from "../lib";

export class ContextOffer implements Context {
  constructor(
    game: Game,
    offerorId: PlayerId,
    offereeId: PlayerId,
    giveCards: Array<CardId>,
    getCards: Array<CardId>,
    giveCash: number
  ) {
    this.game = game;
    this.offerorId = offerorId;
    this.offereeId = offereeId;
    this._accepted = false;
    this._acknowledged = false;
  }

  private game: Game;
  private offerorId: PlayerId;
  private offereeId: PlayerId;
  private giveCards: Array<CardId>;
  private getCards: Array<CardId>;
  private giveCash: number;

  private _accepted: boolean;
  private _acknowledged: boolean;

  get canExit() {
    return this._acknowledged;
  }

  get offeror() {
    return this.game.players[this.offerorId];
  }

  get offeree() {
    return this.game.players[this.offereeId];
  }

  setup() {}

  enter() {
    if (this.giveCash > 0)
      this.game.sendMessage(
        `${mention(this.offerorId)} is offering ${listArray(
          this.giveCards
        )} and $${this.giveCash} to ${mention(this.offereeId)} for ${listArray(
          this.getCards
        )}.`
      );
    else if (this.giveCash < 0)
      this.game.sendMessage(
        `${mention(this.offerorId)} is offering ${listArray(
          this.giveCards
        )} to ${mention(this.offereeId)} for ${listArray(
          this.getCards
        )} and $${-this.giveCash}.`
      );
    else
      this.game.sendMessage(
        `${mention(this.offerorId)} is offering ${listArray(
          this.giveCards
        )} to ${mention(this.offereeId)} for ${listArray(this.getCards)}.`
      );
  }

  exit() {
    if (this._accepted) this.game.sendMessage("The offer has been accepted!");
    else this.game.sendMessage("The offer has been declined!");
  }

  handleCommand(command: Command, properties: Record<string, any>) {
    switch (command) {
      case "ACCEPT": {
        this.giveCards.forEach((id) => {
          this.game.cards[id].owner = this.offereeId;
        });
        this.getCards.forEach((id) => {
          this.game.cards[id].owner = this.offerorId;
        });
        this.offeror.cash -= this.giveCash;
        this.offeree.cash += this.giveCash;
        this._accepted = true;
      }
      case "DECLINE": {
        this._acknowledged = true;
        break;
      }
    }
    this.game.sendMessageQueue();
  }
}

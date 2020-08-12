import { Game } from "../game";
import { mention } from "../lib";
import cardLookup from "../lookup/cards";
import tileLookup from "../lookup/tiles";
import { ContextOffer } from "./offer-context";

export class ContextBase implements Context {
  constructor(game: Game) {
    this.game = game;
    this.playerId = this.game.currentTurn;
    this._hasRolled = false;
    this._doublesStreak = 0;
    this._exitApproved = false;
  }

  private game: Game;
  private playerId: PlayerId;

  private _hasRolled: boolean;
  private _doublesStreak: 0 | 1 | 2 | 3;
  private _exitApproved: boolean;

  get canExit() {
    return this._exitApproved || this.player.jail.inJail;
  }

  get player() {
    return this.game.players[this.playerId];
  }

  setup() {}

  enter() {
    this.game.sendMessage(`It is ${mention(this.playerId)}'s turn.`);
    // this.game.queueMessage(
    //   `${mention(this.player)} is in jail and has ${
    //     3 - this.game.players[this.player].jail.rolls
    //   } rolls left.`
    // );
  }

  exit() {
    this.game.sendMessage(`${mention(this.playerId)} has ended their turn.`);
  }

  handleCommand(command: Command, properties: Record<string, any>) {
    switch (command) {
      case "ROLL": {
        // roll dice
        const dice: DiceRoll = [
          Math.floor(Math.random() * 6 + 1),
          Math.floor(Math.random() * 6 + 1),
        ];
        this.game.queueMessage(
          `${mention(this.playerId)} rolled a **${dice[0]}** and a **${
            dice[1]
          }**!`
        );

        // check for doubles
        if (dice[0] === dice[1]) {
          this._doublesStreak += 1;
          this.game.queueMessage(`Doubles!`);

          // check for snake eyes and apply bonus
          if (dice[0] === 1 && this.game.ruleset.snakeEyesBonus > 0) {
            this.game.giveMoney(this.game.ruleset.snakeEyesBonus);
            this.game.queueMessage(
              `Snake eyes! ${mention(this.playerId)} gets a bonus of $${
                this.game.ruleset.snakeEyesBonus
              }!`
            );
          }

          // jail for streak of three
          if (this._doublesStreak >= 3) {
            this.game.queueMessage(
              `Tough luck! ${mention(
                this.playerId
              )} rolled three doubles in a row and must now go to jail.`
            );
            this._doublesStreak = 0;
            this.game.sendToJail();
            break;
          }
        } else this._doublesStreak = 0;

        // move player
        this.game.queueMessage(`Move ${dice[0] + dice[1]} spaces.`);
        this.game.movePlayerBy(dice[0] + dice[1]);
        this.game.queueMessage(
          `${mention(this.playerId)} landed on ${
            this.game.tileOf(this.playerId).name
          }.`
        );

        // handle tile
        switch (this.game.tileOf(this.playerId).type) {
          case "PROPERTY": {
            // player is owner
            if (
              this.game.cards[
                (this.game.tileOf(this.playerId) as PropertyTile).cardId
              ].owner === this.playerId
            ) {
              this.game.queueMessage(`You already own it!`);
            }

            // someone else is owner
            else if (
              this.game.cards[
                (this.game.tileOf(this.playerId) as PropertyTile).cardId
              ].owner
            ) {
              this.game.queueMessage(
                `Uh oh, ${this.game.tileOf(this.playerId).name} is owned by ${
                  this.game.cards[
                    (this.game.tileOf(this.playerId) as PropertyTile).cardId
                  ].owner
                }! Gotta pay the rent!`
              );
              this.game.pay(
                this.game.rentOf(this.game.tileOf(this.playerId)),
                this.playerId,
                this.game.cards[
                  (this.game.tileOf(this.playerId) as PropertyTile).cardId
                ].owner
              );
            }

            // noone is owner
            else {
              if (
                this.player.cash < this.game.cardOf(this.playerId).originalValue
              ) {
                this.game.queueMessage(
                  `You need $${
                    this.game.cardOf(this.playerId).originalValue
                  } to buy this property, but you only have $${
                    this.player.cash
                  }. Time for an auction!`
                );
                // TODO: auction
              }
              // TODO: auction or buy
            }
            break;
          }
        }
        break;
      }

      case "OFFER": {
        this.game.addContext(
          new ContextOffer(
            this.game,
            this.playerId,
            properties.offereeId,
            properties.giveCards,
            properties.getCards,
            properties.giveCash
          )
        );
        break;
      }

      case "MORTGAGE": {
        switch (this.game.mortgate(properties.prop, this.playerId)) {
          case "SUCCESS":
            this.game.queueMessage(
              `${
                cardLookup[properties.prop].name
              } was successfully mortgaged for $${
                cardLookup[properties.prop].mortgageValue
              }.`
            );
            break;

          case "NOT-OWNER":
            this.game.queueMessage(
              `You are not the owner of ${cardLookup[properties.prop].name}!`
            );
            break;

          case "ALREADY-MORTGAGED":
            this.game.queueMessage(
              `${cardLookup[properties.prop].name} is already mortgaged.`
            );
            break;
        }
        break;
      }

      case "UNMORTGAGE": {
        // TODO: this
        break;
      }

      case "ENDTURN": {
        if (this._hasRolled && this._doublesStreak === 0)
          this._exitApproved = true;
        else this.game.queueMessage("You cannot end your turn yet.");
        break;
      }
    }
    this.game.sendMessageQueue();
  }
}

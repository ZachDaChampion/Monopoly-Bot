import { Game } from "../game";
import { mention } from "../lib";

export class ContextBase implements Context {
  constructor(game: Game) {
    this.game = game;
    this.player = this.game.currentTurn;
    this._hasRolled = false;
    this._doublesStreak = 0;
    this._exitApproved = false;
  }

  private game: Game;
  private player: PlayerId;

  private _hasRolled: boolean;
  private _doublesStreak: 0 | 1 | 2 | 3;
  private _exitApproved: boolean;

  get canExit() {
    return this._exitApproved;
  }

  setup() {}

  enter() {
    this.game.sendMessage(`It is ${mention(this.player)}'s turn.`);
    // this.game.queueMessage(
    //   `${mention(this.player)} is in jail and has ${
    //     3 - this.game.players[this.player].jail.rolls
    //   } rolls left.`
    // );
  }

  exit() {
    this.game.sendMessage(`${mention(this.player)} has ended their turn.`);
  }

  handleCommand(
    command: Command,
    properties: Array<{ prop: string | null; data: string }>
  ) {
    switch (command) {
      case "ROLL": {
        // roll dice
        const dice: DiceRoll = [
          Math.floor(Math.random() * 6 + 1),
          Math.floor(Math.random() * 6 + 1),
        ];
        this.game.queueMessage(
          `${mention(this.player)} rolled a **${dice[0]}** and a **${
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
              `Snake eyes! ${mention(this.player)} gets a bonus of $${
                this.game.ruleset.snakeEyesBonus
              }!`
            );
          }

          // jail for streak of three
          if (this._doublesStreak >= 3) {
            this.game.queueMessage(
              `Tough luck! ${mention(
                this.player
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
          `${mention(this.player)} landed on ${
            this.game.tileOf(this.player).name
          }.`
        );
        // TODO: rent
        break;
      }

      case "OFFER": {
        // TODO: this
        break;
      }

      case "MORTGAGE": {
        // TODO: this
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

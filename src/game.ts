import { RecyclingQueue, Queue, Stack } from "./lib";
import { Client, TextChannel } from "discord.js";
import Tiles from "./lookup/tiles";

// game state
export class Game {
  discord: {
    client: Client;
    channel: TextChannel;
  };
  ruleset: {
    freeParkingBonus: number | "JACKPOT";
    doubleOnGo: boolean;
    noHousingShortage: boolean;
    noRentInJail: boolean;
    snakeEyesBonus: number;
  };
  players: Record<PlayerId, Player>;
  board: Array<TileId>;
  cards: Array<{ card: CardId; owner: PlayerId | null }>;
  houses: number;
  hotels: number;
  chance: RecyclingQueue<BoardEventId>;
  chest: RecyclingQueue<BoardEventId>;
  currentTurn: PlayerId;
  msgQueue: Queue<string>;
  contextStack: Stack<Context>;
  get context() {
    return this.contextStack.top;
  }

  tileOf(player: PlayerId | null = null) {
    if (!player) player = this.currentTurn;
    return Tiles[this.board[this.players[this.currentTurn].location]];
  }

  queueMessage(msg: string) {
    this.msgQueue.push(msg);
  }

  sendMessage(msg: string) {
    this.discord.channel.send(msg);
  }

  sendMessageQueue() {
    let result = "";
    while (this.msgQueue.size > 0) result += this.msgQueue.pop() + "\n";
    this.discord.channel.send(result);
  }

  addContext(ctxt: Context) {
    this.contextStack.push(ctxt);
    this.context.setup();
  }

  handleContext() {
    if (!this.context) return;
    if (this.context.canExit) {
      this.context.exit();
      this.contextStack.pop();
      this.handleContext();
    } else this.context.enter();
  }

  giveMoney(amount: number, player: PlayerId | null = null) {
    if (!player) player = this.currentTurn;
    this.players[player].cash + amount;
  }

  sendToJail(player: PlayerId | null = null) {
    if (!player) player = this.currentTurn;
    this.players[player].jail.rolls = 0;
    this.players[player].jail.inJail = true;
  }

  movePlayerBy(spaces: number, player: PlayerId | null = null) {
    if (!player) player = this.currentTurn;
    this.players[player].location += spaces;
    this.players[player].location =
      this.players[player].location % this.board.length;
  }
}

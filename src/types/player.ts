import * as Tiles from "../lookup/tiles";

// player data
export class Player {
  // board
  private _board: Board;

  // location
  private _boardIndex: number;
  get location() {
    return this._board.tiles[this._boardIndex];
  }
  set location(loc: string | number) {
    if (typeof loc === "string")
      this._boardIndex = this._board.tiles.indexOf(loc);
    else this._boardIndex = loc;
  }
  get boardLocation() {
    return this._boardIndex;
  }

  // go to the nearest tile of a specific type
  gotoNearest(type: string) {
    let i = this._boardIndex;
    do {
      ++i;
    } while (Tiles[this._board.tiles[i]].type != type && i != this._boardIndex);

    if (i === this._boardIndex) return false;
    this._boardIndex = i;
    return true;
  }

  // user ID
  private _userId: string;
  get userId() {
    return this._userId;
  }

  // color
  private _color: string;
  get color() {
    return this._color;
  }

  // cash
  cash: number;

  // cards
  cards: Array<CardId>;

  // jail
  jail: JailData;
  gotoJail() {
    this.jail.rolls = 0;
    this.jail.inJail = true;
  }
}

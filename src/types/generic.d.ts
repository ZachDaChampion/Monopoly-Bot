// color of property monopolies
type PropertyColor =
  | "BROWN"
  | "LIGHT BLUE"
  | "PINK"
  | "ORANGE"
  | "RED"
  | "YELLOW"
  | "GREEN"
  | "DARK BLUE";

// house rules
interface Ruleset {
  freeParkingBonus: number | "JACKPOT";
  doubleOnGo: boolean;
  noHousingShortage: boolean;
  noRentInJail: boolean;
  snakeEyesBonus: number;
}

interface JailData {
  inJail: boolean;
  getOutFreeCards: number;
  rolls: number;
}

type BoardEventId = string;

interface BoardEvent {
  description: string;
  action: (
    player: import("./player").Player,
    board: Board,
    ruleset: Ruleset
  ) => void;
}

type Chance = BoardEvent;
type CommunityChest = BoardEvent;

interface Board {
  tiles: Array<TileId>;
  availableCards: Array<CardId>;
  chanceStack: import("../lib").CardStack<BoardEventId>;
  chestStack: import("../lib").CardStack<BoardEventId>;
}

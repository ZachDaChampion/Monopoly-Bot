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

// rename types for clarity
type PlayerId = string;
type BoardEventId = string;

// player data
interface Player {
  userId: string;
  color: string;
  cash: number;
  cards: Array<CardId>;
  location: number;
  jail: {
    inJail: boolean;
    getOutFreeCards: number;
    rolls: number;
  };
}

// game state
interface Game {
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
  chance: Array<BoardEventId>;
  chest: Array<BoardEventId>;
}

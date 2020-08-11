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

type Command =
  | "ROLL"
  | "OFFER"
  | "MORTGAGE"
  | "UNMORTGAGE"
  | "ENDTURN"
  | "BUYTILE"
  | "USECARD"
  | "PAY";

type DiceRoll = [number, number];

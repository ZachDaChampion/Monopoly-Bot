type TileId = string;

// generic tile
interface Tile {
  name: string;
  type:
    | "PROPERTY"
    | "UTILITY"
    | "RAILROAD"
    | "CHEST"
    | "CHANCE"
    | "GO"
    | "JAIL"
    | "PARKING"
    | "GOTOJAIL";
}

// purchasable tiles
interface PurchasableTile extends Tile {
  cardId: CardId;
  value: number;
}
interface PropertyTile extends PurchasableTile {
  color: PropertyColor;
  type: "PROPERTY";
}
interface UtilityTile extends PurchasableTile {
  type: "UTILITY";
  value: 150;
}
interface RailroadTile extends PurchasableTile {
  type: "RAILROAD";
  value: 200;
}

interface TaxTile extends Tile {
  amount: number;
}

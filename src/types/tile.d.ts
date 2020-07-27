type TileId = string;

// generic tile
interface Tile {
  name: string;
  type: string;
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

interface BoardEventTile extends Tile {}

interface TaxTile extends Tile {
  amount: number;
  type: "TAX";
}
interface GoTile extends Tile {
  type: "GO";
}
interface JailTile extends Tile {
  type: "JAIL";
}
interface ParkingTile extends Tile {
  type: "PARKING";
}
interface GoToJailTile extends Tile {
  type: "GOTOJAIL";
}

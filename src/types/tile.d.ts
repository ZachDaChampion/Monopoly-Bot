type TileId = string;

// generic tile
interface Tile {
  name: string;
}

// purchasable tiles
interface PurchasableTile extends Tile {
  cardId: CardId;
  value: number;
}
interface PropertyTile extends PurchasableTile {
  color: PropertyColor;
}
interface UtilityTile extends PurchasableTile {}
interface RailroadTile extends PurchasableTile {}

// board event tiles
interface BoardEventTile {}
interface ChanceTile extends BoardEventTile {}
interface ChestTile extends BoardEventTile {}

// assorted tiles
interface TaxTile extends Tile {
  amount: number;
}
interface GoTile extends Tile {}
interface JailTile extends Tile {}
interface ParkingTile extends Tile {}
interface GoToJailTile extends Tile {}

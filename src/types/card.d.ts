type CardId = string;

interface Card {
  name: string;
  originalValue: number;
  mortgageValue: number;
}

interface PropertyCard extends Card {
  rent: [
    number, // base rent
    number, // one house
    number, // two houses
    number, // three houses
    number, // four houses
    number // hotel
  ];
  houseCost: number;
  color: PropertyColor;
}

interface UtilityCard extends Card {}

interface RailroadCard extends Card {}

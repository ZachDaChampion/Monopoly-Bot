type CardId = string;

interface Card {
  name: string;
  originalValue: number;
  mortgageValue: number;
}

interface PropertyCard extends Card {
  color: PropertyColor;
  houseCost: number;
  rent: [
    number, // base rent
    number, // one house
    number, // two houses
    number, // three houses
    number, // four houses
    number // hotel
  ];
}

interface UtilityCard extends Card {
  originalValue: 150;
  mortgageValue: 75;
}

interface RailroadCard extends Card {
  originalValue: 200;
  mortgageValue: 100;
}

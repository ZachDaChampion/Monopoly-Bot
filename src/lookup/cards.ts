export default {
  // properties
  "med-ave": {
    name: "Mediterranean Avenue",
    color: "BROWN",
    originalValue: 60,
    mortgageValue: 30,
    houseCost: 50,
    rent: [2, 10, 30, 90, 160, 250],
  } as PropertyCard,

  "bal-ave": {
    name: "Baltic Avenue",
    color: "BROWN",
    originalValue: 60,
    mortgageValue: 30,
    houseCost: 50,
    rent: [4, 12, 60, 180, 320, 450],
  } as PropertyCard,

  "ori-ave": {
    name: "Oriental Avenue",
    color: "LIGHT BLUE",
    originalValue: 100,
    mortgageValue: 50,
    houseCost: 50,
    rent: [6, 30, 90, 270, 400, 550],
  } as PropertyCard,

  "ver-ave": {
    name: "Vermont Avenue",
    color: "LIGHT BLUE",
    originalValue: 100,
    mortgageValue: 50,
    houseCost: 50,
    rent: [6, 30, 90, 270, 400, 550],
  } as PropertyCard,

  "con-ave": {
    name: "Connecticut Avenue",
    color: "LIGHT BLUE",
    originalValue: 120,
    mortgageValue: 60,
    houseCost: 50,
    rent: [8, 40, 100, 300, 450, 600],
  } as PropertyCard,

  "stc-plc": {
    name: "St. Charles Place",
    color: "PINK",
    originalValue: 140,
    mortgageValue: 70,
    houseCost: 100,
    rent: [10, 50, 150, 450, 625, 750],
  } as PropertyCard,

  "sta-ave": {
    name: "States Avenue",
    color: "PINK",
    originalValue: 140,
    mortgageValue: 70,
    houseCost: 100,
    rent: [10, 50, 150, 450, 625, 750],
  } as PropertyCard,

  "vir-ave": {
    name: "Virginia Avenue",
    color: "PINK",
    originalValue: 160,
    mortgageValue: 80,
    houseCost: 100,
    rent: [12, 60, 180, 500, 700, 900],
  } as PropertyCard,

  "stj-plc": {
    name: "St. James Place",
    color: "ORANGE",
    originalValue: 180,
    mortgageValue: 90,
    houseCost: 100,
    rent: [14, 70, 200, 550, 750, 950],
  } as PropertyCard,

  "ten-ave": {
    name: "Tennessee Avenue",
    color: "ORANGE",
    originalValue: 180,
    mortgageValue: 90,
    houseCost: 100,
    rent: [14, 70, 200, 550, 750, 950],
  } as PropertyCard,

  "nyk-ave": {
    name: "New York Avenue",
    color: "ORANGE",
    originalValue: 200,
    mortgageValue: 100,
    houseCost: 100,
    rent: [16, 80, 220, 600, 800, 1000],
  } as PropertyCard,

  "ken-ave": {
    name: "Kentucky Avenue",
    color: "RED",
    originalValue: 220,
    mortgageValue: 110,
    houseCost: 150,
    rent: [18, 90, 250, 700, 875, 1050],
  } as PropertyCard,

  "ind-ave": {
    name: "Indiana Avenue",
    color: "RED",
    originalValue: 220,
    mortgageValue: 110,
    houseCost: 150,
    rent: [18, 90, 250, 700, 875, 1050],
  } as PropertyCard,

  "ill-ave": {
    name: "Illinois Avenue",
    color: "RED",
    originalValue: 240,
    mortgageValue: 120,
    houseCost: 150,
    rent: [20, 100, 300, 750, 925, 1100],
  } as PropertyCard,

  "atl-ave": {
    name: "Indiana Avenue",
    color: "YELLOW",
    originalValue: 260,
    mortgageValue: 130,
    houseCost: 150,
    rent: [22, 110, 300, 800, 975, 1150],
  } as PropertyCard,

  "ven-ave": {
    name: "Ventnor Avenue",
    color: "YELLOW",
    originalValue: 260,
    mortgageValue: 130,
    houseCost: 150,
    rent: [22, 110, 300, 800, 975, 1150],
  } as PropertyCard,

  "mar-gar": {
    name: "Marvin Gardens",
    color: "YELLOW",
    originalValue: 280,
    mortgageValue: 140,
    houseCost: 150,
    rent: [24, 120, 360, 850, 1025, 1200],
  } as PropertyCard,

  "pac-ave": {
    name: "Pacific Avenue",
    color: "GREEN",
    originalValue: 300,
    mortgageValue: 150,
    houseCost: 200,
    rent: [26, 130, 390, 900, 1100, 1275],
  } as PropertyCard,

  "ncar-ave": {
    name: "North Carolina Avenue",
    color: "GREEN",
    originalValue: 300,
    mortgageValue: 150,
    houseCost: 200,
    rent: [26, 130, 390, 900, 1100, 1275],
  } as PropertyCard,

  "pen-ave": {
    name: "Pennsylvania Avenue",
    color: "GREEN",
    originalValue: 320,
    mortgageValue: 160,
    houseCost: 200,
    rent: [28, 150, 450, 1000, 1200, 1400],
  } as PropertyCard,

  "par-plc": {
    name: "Park Place",
    color: "DARK BLUE",
    originalValue: 350,
    mortgageValue: 175,
    houseCost: 200,
    rent: [35, 175, 500, 1100, 1300, 1500],
  } as PropertyCard,

  "brd-wlk": {
    name: "Boardwalk",
    color: "DARK BLUE",
    originalValue: 400,
    mortgageValue: 200,
    houseCost: 200,
    rent: [50, 200, 600, 1400, 1700, 2000],
  } as PropertyCard,

  // utilities
  "ele-com": { name: "Electric Company" } as UtilityCard,
  "wtr-wrk": { name: "Water Works" } as UtilityCard,

  // railroads
  "rea-rrd": { name: "Reading Railroad" } as RailroadCard,
  "pen-rrd": { name: "Pennsylvania Railroad" } as RailroadCard,
  "bno-rrd": { name: "B&O Railroad" } as RailroadCard,
  "sht-lin": { name: "Short Line" } as RailroadCard,
} as Record<CardId, Card>;

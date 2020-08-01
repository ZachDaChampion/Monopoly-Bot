export default {
  chest: {
    name: "Community Chest",
    type: "CHEST",
  } as Tile,

  chance: {
    name: "Chance",
    type: "CHANCE",
  } as Tile,

  go: {
    name: "GO",
    type: "GO",
  } as Tile,

  "med-ave": {
    name: "Mediterranean Avenue",
    cardId: "med-ave",
    value: 60,
    color: "BROWN",
  } as PropertyTile,

  "bal-ave": {
    name: "Baltic Avenue",
    cardId: "bal-ave",
    value: 60,
    color: "BROWN",
  } as PropertyTile,

  "inc-tax": {
    name: "Income Tax",
    amount: 200,
  } as TaxTile,

  "rea-rrd": {
    name: "Reading Railroad",
    cardId: "rea-rrd",
  } as RailroadTile,

  "ori-ave": {
    name: "Oriental Avenue",
    cardId: "ori-ave",
    value: 100,
    color: "LIGHT BLUE",
  } as PropertyTile,

  "ver-ave": {
    name: "Vermont Avenue",
    cardId: "ver-ave",
    value: 100,
    color: "LIGHT BLUE",
  } as PropertyTile,

  "con-ave": {
    name: "Connecticut Avenue",
    cardId: "con-ave",
    value: 120,
    color: "LIGHT BLUE",
  } as PropertyTile,

  jail: {
    name: "Jail (Just visiting)",
    type: "JAIL",
  } as Tile,

  "stc-plc": {
    name: "St. Charles Place",
    cardId: "stc-plc",
    value: 140,
    color: "PINK",
  } as PropertyTile,

  "ele-com": {
    name: "Electric Company",
  } as UtilityTile,

  "sta-ave": {
    name: "States Avenue",
    cardId: "sta-ave",
    value: 140,
    color: "PINK",
  } as PropertyTile,

  "vir-ave": {
    name: "Virginia Avenue",
    cardId: "vir-ave",
    value: 160,
    color: "PINK",
  } as PropertyTile,

  "pen-rrd": {
    name: "Pennsylvania Railroad",
    cardId: "pen-rrd",
  } as RailroadTile,

  "stj-plc": {
    name: "St. James Place",
    cardId: "stj-plc",
    value: 180,
    color: "ORANGE",
  } as PropertyTile,

  "ten-ave": {
    name: "Tennessee Avenue",
    cardId: "ten-ave",
    value: 180,
    color: "ORANGE",
  } as PropertyTile,

  "nyk-ave": {
    name: "New York Avenue",
    cardId: "nyk-ave",
    value: 200,
    color: "ORANGE",
  } as PropertyTile,

  parking: {
    name: "Free Parking",
    type: "PARKING",
  } as Tile,

  "ken-ave": {
    name: "Kentucky Avenue",
    cardId: "ken-ave",
    value: 220,
    color: "RED",
  } as PropertyTile,

  "ind-ave": {
    name: "Indiana Avenue",
    cardId: "ind-ave",
    value: 220,
    color: "RED",
  } as PropertyTile,

  "ill-ave": {
    name: "Illinois Avenue",
    cardId: "ill-ave",
    value: 240,
    color: "RED",
  } as PropertyTile,

  "bno-rrd": {
    name: "B&O Railroad",
    cardId: "bno-rrd",
  } as RailroadTile,

  "atl-ave": {
    name: "Atlantic Avenue",
    cardId: "atl-ave",
    value: 260,
    color: "YELLOW",
  } as PropertyTile,

  "ven-ave": {
    name: "Ventnor Avenue",
    cardId: "ven-ave",
    value: 260,
    color: "YELLOW",
  } as PropertyTile,

  "wtr-wrk": {
    name: "Water Works",
  } as UtilityTile,

  "mar-gar": {
    name: "Marvin Gardens",
    cardId: "mar-gar",
    value: 280,
    color: "YELLOW",
  } as PropertyTile,

  "go-jail": {
    name: "Go to jail",
    type: "GOTOJAIL",
  } as Tile,

  "pac-ave": {
    name: "Pacific Avenue",
    cardId: "pac-ave",
    value: 300,
    color: "GREEN",
  } as PropertyTile,

  "ncar-ave": {
    name: "North Carolina Avenue",
    cardId: "ncar-ave",
    value: 300,
    color: "GREEN",
  } as PropertyTile,

  "pen-ave": {
    name: "Pennsylvania Avenue",
    cardId: "pen-ave",
    value: 320,
    color: "GREEN",
  } as PropertyTile,

  "sht-lin": {
    name: "Short Line",
    cardId: "sht-lin",
  } as RailroadTile,

  "par-plc": {
    name: "Park Place",
    cardId: "par-plc",
    value: 350,
    color: "DARK BLUE",
  } as PropertyTile,

  "lux-tax": {
    name: "Luxary Tax",
    amount: 100,
  } as TaxTile,

  "brd-wlk": {
    name: "Boardwalk",
    cardId: "brd-wlk",
    value: 400,
    color: "DARK BLUE",
  } as PropertyTile,
} as Record<TileId, Tile>;

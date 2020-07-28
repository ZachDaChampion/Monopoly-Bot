import { Player } from "../types/player";

export default {
  // chance
  "chance-0": {
    description: "Advance to Go",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "go";
      player.cash += 200 * (ruleset.doubleOnGo ? 2 : 1);
    },
  } as Chance,

  "chance-1": {
    description: "Advance to Illinois Ave - If you pass Go, collect $200.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "ill-ave";
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-2": {
    description: "Advance to St. Charles Place - If you pass Go, collect $200.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "stc-plc";
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-3": {
    description: "Bank pays you dividend of $50.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 50;
    },
  } as Chance,

  "chance-4": {
    description:
      "Advance to the nearest railroad. If unowned, you may buy it from the bank. If owned, pay the owner twice the rental to which they are otherwise entitled.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.gotoNearest("RAILROAD");
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-5": {
    description:
      'Go to jail. Go directly to jail, do not pass "GO", do not collect $200',
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.gotoJail();
    },
  } as Chance,

  "chance-6": {
    description:
      "Get out of jail free. This card may be kept until needed or traded.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.jail.getOutFreeCards += 1;
    },
  } as Chance,

  "chance-7": {
    description:
      "Advance to the nearest railroad. If unowned. you may buy it from the bank. If owned, pay the owner twice the rental price to which they are otherwise entitled.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.gotoNearest("RAILROAD");
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-8": {
    description:
      'Take a trip to reading railroad. If you pass "GO" collect $200.',
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "rea-rrd";
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-9": {
    description: "Go back three spaces.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = player.boardLocation - 3;
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-10": {
    description: "Your building loan matures. Collect $150.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 150;
    },
  } as Chance,

  "chance-11": {
    description: "Advance to boardwalk.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "brd-wlk";
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-12": {
    description:
      "Advance to the nearest utility. If unowned, you may buy it from the bank. If owned, throw dice and pay owner a total ten times amount thrown.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.gotoNearest("UTILITY");
      // TODO: payment and stuff
    },
  } as Chance,

  "chance-13": {
    description:
      "Make general repairs on all your property: for each house pay $25, for each hotel pay $100.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      // TODO: idk just kinda do the thing
    },
  } as Chance,

  "chance-14": {
    description: "Speeding fine of $15.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash -= 15;
    },
  } as Chance,

  "chance-15": {
    description:
      "You have been elected chairman of the board. Pay each player $50.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      // TODO: idk just kinda do the thing
    },
  } as Chance,
} as Record<BoardEventId, BoardEvent>;

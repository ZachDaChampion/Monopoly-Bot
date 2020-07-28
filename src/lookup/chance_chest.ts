import { Player } from "../types/player";

export default {
  // chance
  "chance-0": {
    description: "Advance to GO.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "go";
      // TODO: payment and stuff
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

  // community chest
  "chest-0": {
    description: "You have won second prize in a beauty contest. Collect $10.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 10;
    },
  } as CommunityChest,

  "chest-1": {
    description: "It is your birthday. Collect $10 from every player.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      // TODO: idk just kinda do the thing
    },
  } as CommunityChest,

  "chest-2": {
    description: "From sale of stock you get $50.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 50;
    },
  } as CommunityChest,

  "chest-3": {
    description: "Doctor's fees. Pay $50.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash -= 50;
    },
  } as CommunityChest,

  "chest-4": {
    description: "Income tax refund. Collect $20.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 20;
    },
  } as CommunityChest,

  "chest-5": {
    description: "Bank error in your favor. Collect $200.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 200;
    },
  } as CommunityChest,

  "chest-6": {
    description: "Pay hospital fees of $100.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 100;
    },
  } as CommunityChest,

  "chest-7": {
    description: "Life insurance matures. Collect $100.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 100;
    },
  } as CommunityChest,

  "chest-8": {
    description: "Holiday fund matures. Receive $100.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 100;
    },
  } as CommunityChest,

  "chest-9": {
    description:
      "You are assessed for street repairs: $40 per house, $115 per hotel.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      // TODO: idk just kinda do the thing
    },
  } as CommunityChest,

  "chest-10": {
    description:
      'Go to jail. Go directly to jail, do not pass "GO", do not collect $200.',
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.gotoJail();
    },
  } as CommunityChest,

  "chest-11": {
    description: "Receive $25 consultancy fee.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 25;
    },
  } as CommunityChest,

  "chest-12": {
    description: "You inherit $100.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash += 100;
    },
  } as CommunityChest,

  "chest-13": {
    description:
      "Get out of jail free. This card may be kept until needed or traded.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.jail.getOutFreeCards += 1;
    },
  } as CommunityChest,

  "chest-14": {
    description: "Advance to GO.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = "go";
      // TODO: payment and stuff
    },
  } as CommunityChest,

  "chest-15": {
    description: "Pay school fees of $50.",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.cash -= 50;
    },
  } as CommunityChest,
} as Record<BoardEventId, BoardEvent>;

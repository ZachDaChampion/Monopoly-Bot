export default {
  // chance
  "chance-0": {
    description: "Advance to Go",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      player.location = board.tiles.indexOf("go");
      player.cash += 200 * (ruleset.doubleOnGo ? 2 : 1);
    },
  } as Chance,

  "chance-1": {
    description: "Advance to Illinois Ave - If you pass Go, collect $200",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      const destination = board.tiles.indexOf("ill-ave");
      if (player.location > destination) player.cash += 200;
      player.location = destination;
    },
  } as Chance,

  "chance-2": {
    description: "Advance to St. Charles Place - If you pass Go, collect $200",
    action: (player: Player, board: Board, ruleset: Ruleset) => {
      const destination = board.tiles.indexOf("stc-plc");
      if (player.location > destination) player.cash += 200;
      player.location = destination;
    },
  } as Chance,
} as Record<BoardEventId, BoardEvent>;

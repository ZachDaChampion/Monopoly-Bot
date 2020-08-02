// init discord client
import * as DiscordJS from "discord.js";
const client = new DiscordJS.Client();

// init environment variables from .env
import dotenv from "dotenv";
dotenv.config();

// import card stack
import * as lib from "./lib";

// login message
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  let stack = new lib.RecyclingQueue([1, 2, 3, 4, 5]);

  // // set avatar
  // client.user
  //   .setAvatar("res/avatar.png")
  //   .then((user) => console.log(`Avatar set!`));
});

// log in to bot
client.login(process.env.DISCORD_TOKEN);

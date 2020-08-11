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

  // client.user
  //   .setAvatar("res/avatar.png")
  //   .then((user) => console.log(`Avatar set!`));
});

client.on("message", (msg) => {
  // TODO: interpret command
  // TODO: send command to context
  // TODO: handle context
});

// log in to bot
client.login(process.env.DISCORD_TOKEN);

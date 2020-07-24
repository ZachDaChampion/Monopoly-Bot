// init discord client
import * as DiscordJS from "discord.js";
const client = new DiscordJS.Client();

// init environment variables from .env
import dotenv from "dotenv";
dotenv.config();

// login message
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // set avatar
  client.user
    .setAvatar("res/avatar.png")
    .then((user) => console.log(`Avatar set!`));
});

// log in to bot
client.login(process.env.DISCORD_TOKEN);

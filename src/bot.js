require('dotenv').config();
const Discord = require('discord.js');
// const Discord = require('discord.js');

// Using Intents class
const bot = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
  ]})

bot.on('message', (msg) => {
  // Send back a reply when the specific command has been written by a user.
  if (msg.content === '!hello') {
    msg.reply('Hello, World!');
  }
});

bot.login(process.env.DISCORD_BOT_TOKEN);
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('>hello')) {
    message.channel.send('Hello!');
  }
});

client.login('MTEwMTk0MzQ3OTA5MDgyNzMxNQ.G05BX1.ALfdI3G5nzX3lwhjwtPeipQEYnZD3qdSXjvlLU');
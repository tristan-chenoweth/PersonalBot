//Required constants to run the bot
const { } = require('../.env');
const { Client, Events, GatewayIntentBits, SlashCommandBuilder, Guild, OAuth2Guild} = require('discord.js')
const bot = new Client({ intents: [GatewayIntentBits.Guilds]});

//Initialization steps once "node ." is run in the terminal it will respond with "Logged in as PersonalBot#5619" or an error will be displayed (compiling issue)
bot.once(Events.ClientReady, c => {
    const guildID = c.guilds.cache.get('GUILD ID');
    console.log(`Logged in as ${c.user.tag}`);

    //This creates a new slash command named ping
    const ping = new SlashCommandBuilder()

        //Set name of command
        .setName('ping')

        //Set description - this will populate under the command name in the discod message field.
        .setDescription('replies with "Pong!"')

    //This created a new slash command named hello
    const hello = new SlashCommandBuilder()

        //Set name of command
        .setName('hello')

        //Set description - this will populate under the command name in the discod message field.
        .setDescription('replies with "Hello <user>!"')

        //This sets user options - allows for the bot to call different user, if option is not used bot will call message creator.
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to say hi to.')
                .setRequired(false)
        )
    
    const meow = new SlashCommandBuilder()
        .setName('meow')
        .setDescription('logs the bot out')
    
    
    //The following commands physically creat the command to be referenced later. It is also tied to a specific Guild(server)
    bot.application.commands.create(ping, guildID);
    bot.application.commands.create(hello, guildID);
    bot.application.commands.create(meow, guildID);
});

//The following is the bot waiting for a certain interaction from the user.
bot.on(Events.InteractionCreate, interaction => {

    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'ping'){
        interaction.reply("Pong!");
    }
    if(interaction.commandName === 'hello'){
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;
        interaction.reply(`Hello ${user}!`);
    }
    if(interaction.commandName === 'meow'){
        interaction.reply(':cat2: :cat2: :cat2:');
        //interaction.reply('There is a cat on the loose!! \n :cat2:');
    }


    //The below will log the interaction in the console if you don't want to print the interaction to the console add // in front of the command. 
    console.log(interaction);
});

bot.login(DISCORD_BOT_TOKEN);
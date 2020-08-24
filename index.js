const prefix = require('./assets/config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
client.aliases - new Discord.Collection();

client.on('ready', () =>{
	console.log(`${client.user.tag} is now online!`)
	client.user.setActivity('!help', {type: 'LISTENING'})
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

client.on('message', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.channel.send('There was an error trying to execute that command!');
    }
});

client.login(process.env.TOKEN);
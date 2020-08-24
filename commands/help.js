module.exports = {
    name: 'help',
    description: 'This is a help command.',
    execute(message, args){
        const Discord = require('discord.js');
        const embedHelp = new Discord.MessageEmbed()
        .setColor('#5440cd')
        .setTitle('<a:LZ_loading:746073432340431019> Commands Help')
        .addFields(
            {name: 'Utility', value: '\`help\` \`ping\`'},
            {name: 'Support', value: '\`support\`'}
        )
        .setFooter('Prefix: !')
        .setTimestamp();
    message.author.send(embedHelp)
    },
};
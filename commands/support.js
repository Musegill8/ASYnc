const { execute } = require("./help");
const utils = require('../assets/utilities');
const Discord = require('discord.js');

module.exports = {
    name: 'support',
    async execute(message, args, client){
        const embed = new Discord.MessageEmbed()
        .setTitle('<a:LZ_loading:746073432340431019> Looking for support?')
        .setDescription('Create a ticket in <#747533450998841484>!')
        .setColor('#5440cd')
        .setFooter(utils.footer)
        .setTimestamp()
        message.author.send(embed)
    }
};
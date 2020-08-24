module.exports = {
    name: 'ping',
    async execute(message, args, client) {
        const msg = await message.channel.send('Pinging...');
        msg.edit(`<a:LZ_loading:746073432340431019> Pong! \`Latency: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\``);

    }
};
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!flip') {
        // send back "Pong." to the channel the message was sent in
        var facts = ["You got Heads", "You got Tails"];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);
    }
    ;
});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

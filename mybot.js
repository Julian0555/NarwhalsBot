const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Initiation Complete");
//    client.user.setStatus('dnd');  
    client.user.setStatus('online');  
	client.user.setActivity('Fortnite', { type: 'PLAYING' })
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith("<@490579899518550016> help")) {
  //if (message.content.toLowerCase("s!test")) {
    message.channel.send({embed: {
    title: "Bot Commands:",
	color: 0xA591FF,
    url: "https://i.imgur.com/RKmAaby.gif",
	description: " ",
    footer: {
      icon_url: "https://i.imgur.com/RKmAaby.gif",
      text: "Rosie (BOT) by Julian0555"
	}, 
    fields: [
      {
        "name": "@Rosie Emotes",
        "value": "Will show a list of emoticons that the bot can react with."
      }
    ]
	}});
  }
  if (message.content.toLowerCase().startsWith("narbottest")) {
  	message.channel.send("Hey this bot works");
  }
});

client.login(process.env.BOT_TOKEN);
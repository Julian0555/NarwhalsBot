const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Initiation Complete");
    client.user.setStatus('dnd');  
    client.user.setStatus('online');  
	client.user.setActivity('Fortnite', { type: 'PLAYING' })
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith("<@490579899518550016> help")) {
  //if (message.content.toLowerCase("s!test")) {
    message.channel.send({embed: {
    title: "Bot Commands:",
	color: 0x00FF01,
    url: "https://cdn.dribbble.com/users/722563/screenshots/2966091/narwhal_dribbble.gif",
	description: " ",
    footer: {
      icon_url: "https://cdn.dribbble.com/users/722563/screenshots/2966091/narwhal_dribbble.gif",
      text: "Wooooo!"
	}, 
    fields: [
      {
        "name": "narbottest",
        "value": "Just a test command"
      }
    ]
	}});
  }
  if (message.content.toLowerCase().startsWith("narbottest")) {
  	message.channel.send("Hey this bot works");
  }
});

client.login(process.env.BOT_TOKEN);
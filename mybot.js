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
    url: "https://i.imgur.com/X3Isprt.png",
	description: " ",
    footer: {
      icon_url: "https://i.imgur.com/X3Isprt.png",
      text: "Wooooo!"
	}, 
    fields: [
	  {
        "name": "@NarbotWooooo say 'Your Message'",
        "value": "Will say whatever you want."
      },
      {
        "name": "narbottest",
        "value": "Just a test command."
      }
    ]
	}});
  }
  if (message.content.toLowerCase().startsWith("narbottest")) {
  	message.channel.send("Hey this bot works");
  }
  if (message.content.toLowerCase().startsWith("<@490579899518550016> say")) {
    message.channel.sendMessage(message.content.replace('<@490579899518550016> say ',''));
  }
  if (message.content.toLowerCase().startsWith("pee is stored in the balls")) {
    message.channel.send("<:MarioHead:481325741150175232>");
  }
It's been two days since you've posted this, so I'm not sure if you've received your answer or not -- either way, something like this would work (I think):

  if (message.content.toLowerCase().startsWith("narbottest2")) {
      let allowedRole = message.guild.roles.find("name", "Admin");
      if (message.member.roles.has(allowedRole.id) {
        message.channel.send("<:MarioHead:481325741150175232>");		  
      } else {
        message.channel.send("<:MarioHead:481325741150175232> 2");		  
      }
  }
});

client.login(process.env.BOT_TOKEN);
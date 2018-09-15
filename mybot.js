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
  if (message.content.toLowerCase().startsWith("<@479779859858587658> help")) {
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
        "name": "@Rosie say 'Your Message'",
        "value": "Will say whatever you want."
      },
      {
        "name": "@Rosie Emotes",
        "value": "Will show a list of emoticons that the bot can react with."
      }
    ]
	}});
  }
  if (message.content.toLowerCase().startsWith("<@479779859858587658> emotes")) {
  //if (message.content.toLowerCase("s!test")) {
    message.channel.send({embed: {
    title: "Bot Emotes:",
	color: 0xA591FF,
    url: "https://i.imgur.com/RKmAaby.gif",
	description: " ",
    footer: {
      icon_url: "https://i.imgur.com/RKmAaby.gif",
      text: "Rosie (BOT) by Julian0555"
	}, 
    fields: [
      {
        "name": "Bite",
        "value": "Will react to your message with '<a:Bite:473541275975680000>'"
      },
      {
        "name": "Crunk it Mckinley",
        "value": "Will respond with '<:mckinleyplease:472049234808668190> <:crunkitmckinley:472060635853750293>'"
      },
      {
        "name": "Jake",
        "value": "Will respond with '<a:Jake:480931610020282368>'"
      },
      {
        "name": "Marge",
        "value": "Will respond with '<a:margecrunks:472166578486640650>'"
      },
      {
        "name": "Depression",
        "value": "Will respond with '<a:oog2:486350371531522063>'"
      },
      {
        "name": "Guybrush",
        "value": "Will respond with '<a:guybrush:488051864416419852>'"
      },
      {
        "name": "Then Perish",
        "value": "Will respond with '<:perish:479818639520956418>'"
      },
      {
        "name": "s t o p",
        "value": "Will respond with '<:stop:481250291732316181>'"
      },
      {
        "name": "Oof",
        "value": "Will respond with '<:oog:473544097588576296>'"
      }
    ]
	}});
  }
  if (message.content.toLowerCase().startsWith("crunk it mckinley")) {
  	message.channel.send("<:mckinleyplease:472049234808668190> <:crunkitmckinley:472060635853750293>")
  }
  if (message.content.toLowerCase().startsWith("marge")) {
  	message.channel.send("<a:margegif:472166578486640650>")
  }
  if (message.content.toLowerCase().startsWith("bite")) {
  	message.react("473541275975680000")  
  }
  if (message.content.toLowerCase().startsWith("jake")) {
  	message.channel.send("<a:Jake:480931610020282368>");
  }
  if (message.content.toLowerCase().startsWith("oof")) {
  	message.channel.send("<:oog:473544097588576296>");
  }
  if (message.content.toLowerCase().includes("then perish")) {
  	message.channel.send("<:perish:479818639520956418>");
  }
  if (message.content.toLowerCase().includes("t h e n  p e r i s h")) {
  	message.channel.send("<:perish:479818639520956418>");
  }
  if (message.content.toLowerCase().includes("s t o p")) {
  	message.channel.send("<:stop:481250291732316181>");
  }
  if (message.content.toLowerCase().startsWith("<@479779859858587658> say")) {
    message.channel.sendMessage(message.content.replace('<@479779859858587658> say ',''));
  }
  if (message.content.toLowerCase().startsWith("depression")) {
  	message.channel.send("<a:oog2:486350371531522063>");
  }
  if (message.content.toLowerCase().startsWith("guybrush")) {
  	message.channel.send("<a:guybrush:488051864416419852>");
  }
});

client.login(process.env.BOT_TOKEN);
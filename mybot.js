const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Initiation Complete");
    client.user.setStatus('dnd');   
	client.user.setActivity('with my nipples', { type: 'PLAYING' })
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith("<@490579899518550016> help")) {
    if(message.guild === null){
	    message.channel.send("Here you go:"); 
    } else {
	    message.channel.send("Check your messages."); 
	}	
    message.author.send({embed: {
    title: "Bot Commands:",
    color: Math.floor(Math.random() * 16777214) + 1,  //random color between one and 16777214 (dec)
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
        "name": "@NarbotWooooo rank",
        "value": "Will say whatever you want."
      },
      {
        "name": "Isabelle",
        "value": "<a:isabelledance:490662425163464704>"
      }
    ]
	}});
  }
  if (message.content.toLowerCase().startsWith("<@490579899518550016> say")) {
    message.channel.sendMessage(message.content.replace('<@490579899518550016> say ',''));
  }
  if (message.content.toLowerCase().startsWith("<@490579899518550016> rank")) {
    if(message.member.roles.has("360910172970811400")){ 
	    message.channel.send("You have the Captain/Admin role."); 
    } else if(message.member.roles.has("360923714059108353")){
	    message.channel.send("You have the Toad Brigade role. <:Toad:403007404285100042>"); 
    } else if(message.member.roles.has("526293125879037952")){
	    message.channel.send("You have the Toads role. <:ToadWhyDoIExist:526307441869062165>"); 
    } else if(message.member.roles.has("526293174491021322")){
	    message.channel.send("You have the Shy Guys role. <:shyguy:526317599949193216>"); 
    } else{
	    message.channel.send("<:MarioHead:481325741150175232> You appear to have no rank. "); 
	}
  }
  if (message.content.toLowerCase().startsWith("isabelle")) {
	message.channel.send("<a:isabelledance:490662425163464704>"); 
  }
});

client.login(process.env.BOT_TOKEN);
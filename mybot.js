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
    if(message.guild === null){
	    message.channel.send("You have the admin role."); // Send "Hi" if he does
    } else {
	    message.channel.send("You don't the admin role."); // Send "Hi" if he does
	}	
    message.author.send({embed: {
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
  if (message.content.toLowerCase().startsWith("roletestadmin")) {
    if(message.member.roles.has("360923714059108353")){ // Check if member has role
	    message.channel.send("You have the admin role."); // Send "Hi" if he does
    } else {
	    message.channel.send("You don't the admin role."); // Send "Hi" if he does
	}
  }
});

client.login(process.env.BOT_TOKEN);
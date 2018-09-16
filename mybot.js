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
	    message.channel.send("Here you go:"); // Send "Hi" if he does
    } else {
	    message.channel.send("Check your messages."); // Send "Hi" if he does
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
    if(message.member.roles.has("360910172970811400")){ // Check if member has role
	    message.channel.send("You have the Captain Narwhals role."); // Send "Hi" if he does
    } else if(message.member.roles.has("360923714059108353")){
	    message.channel.send("You have the Admins role."); // Send "Hi" if he does
    } else if(message.member.roles.has("455184504332615681")){
	    message.channel.send("You have the Artists role."); // Send "Hi" if he does
    } else if(message.member.roles.has("455192628938670081")){
	    message.channel.send("You have the Pro-Roblox-Player role."); // Send "Hi" if he does
    } else if(message.member.roles.has("455192615936065538")){
	    message.channel.send("You have the Hardcore-Weebs role."); // Send "Hi" if he does
    } else if(message.member.roles.has("455192628938670081")){
	    message.channel.send("You have the Pro-Roblox-Player role."); // Send "Hi" if he does
    } else if(message.member.roles.has("409186805305311243")){
	    message.channel.send("You have the Active Members role."); // Send "Hi" if he does
    } else if(message.member.roles.has("360910525758177280")){
	    message.channel.send("You have the Members role."); // Send "Hi" if he does
    } else if(message.member.roles.has("360909589966749696")){
	    message.channel.send("<:MarioHead:481325741150175232> You appear to have no roles. "); // Send "Hi" if he does
	}
  }
  if (message.content.toLowerCase().startsWith("Isabelle")) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/338443917500481547/415251275245027329/84db14c8d24045d09c211cc5ae6997697238fbcb_hq.gif"]});
  }
});

client.login(process.env.BOT_TOKEN);
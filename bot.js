const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618613787624210447")
setInterval(function() {
channel.send(`هلا كيفك زين والله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
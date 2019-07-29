const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("605415500792725537")
setInterval(function() {
channel.send(`afknnafkjnnfajkfasjnsafknjfknjajknfsjnfasknjfasnkjfaknjknjfaknjafknaffjkansjknfasknjfasknaf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
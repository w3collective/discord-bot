const Discord = require("discord.js");
const client = new Discord.Client();
client.login("YOUR_TOKEN_HERE");

client.on("ready", () => {
  console.log("Bot ready!");
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "general"
  );
  if (!channel) return;
  channel.send(
    "Welcome to the server, I'm the resident bot. You can find out how I was created here -> https://w3collective.com/custom-discord-bot-node/"
  );
});

client.on("message", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong");
  }
});
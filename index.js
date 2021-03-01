const Discord = require("discord.js");
const client = new Discord.Client();
client.login("ODE0NjQ3MjMxNjI5NzU0NDM5.YDg5Ww.Mz8bqQ0VedzeLJNTdXiKacYIG9Q");

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

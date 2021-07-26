var { MessageEmbed } = require("discord.js");

#Requires "discord-together" to be imported beforehand.



module.exports = {
  name: "together",
  description: "filler description",
  run: async (client, message, args) => {
    console.log("I am running too");
    message.channel.send("Available types: youtube,poker,chess,betrayal,fishing. Please type whatever you wish to choose in a precise manner.")
      try{

      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 16900, max: 1, errors: ["time"] }
      );

      client.discordTogether.createTogetherCode(message.member.voice.channelID, msgs.first().content).then(async invite => {
      return message.channel.send(`${invite.code}`);
      });


    } catch (e) {
      return message.channel.send(`Time out.`);
    }

}
}

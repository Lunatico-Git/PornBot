const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports = {
    aliases: ["hentai"], // Coloque no diminutivo ( Nome do comando para usar )
    help: { // Sistema de Help
        desc: "Gifs e fotos hentais", // Descrição dele
        exemplo: "hentai", // Como usar o comando!
    },
    run: (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('Use este comando em um canal NSFW!')
        superagent.get('https://nekos.life/api/v2/img/hentai')
            .end((err, response) => {
                const lewdembed = new Discord.RichEmbed()
                    .setTitle("Hentai")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
}
module.exports = new (class cmd {
    constructor() {
        this.name = "yaoi";
        this.category = "hentai"
        this.help = "Hentai Yaoi";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["hgay"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.randomPuppy("yaoi").then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Yaoi")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
})
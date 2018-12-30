const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "$";

client.login("NTI2MzI1Nzc4NDY0NjM2OTM5.DwDiuw.zT8yxk6QH2E7SRJ-oSRS0FBm-0Y");

const token = process.env.token // a garder en version heroku

client.on("ready" , () => {
    console.log("Paré à décoller")
    client.user.setStatus("dnd")
    client.user.setGame("Commande d'aide : /aide")
});
client.on('message', message =>
{
    if (message.content.startsWith("/staff"))
    {
        
        
            var embed = new Discord.RichEmbed()
            .setTitle("Liste Du Staff")
            .setDescription("Voici la liste du staff :")
            .addField("👑 Propriétaires :", "YannFusion / MaaximeFS")
            .addField("👑 Fondateurs :", "InfinityEnergie / Hollow God")
            .addField("⚙️  Responsables :", "SuperMario / Emer16")
            .addField("💻  Développeur :", "{.L.O.S.T.}")
            .addField("⚙️ Administrateurs :", "BanDgi / iopoi77193 / GabrielLeThug / baril")
            .addField("🔨 Modérateurs :", "Paco76 / ImNotYou")
            .setFooter("Commande : /staff | Commande d'aide : /aide")
            .setAuthor("Commande par : YannFusion")
            .setColor("#a90000")
            .setThumbnail(client.user.avatarURL)
            message.channel.sendEmbed(embed)
        }

        if (message.content.startsWith("/aide"))
        {
            var embed2 = new Discord.RichEmbed()
            .setTitle("Commande D'aide")
            .setDescription("Voici les commandes du bot :")
            .addField("/staff", "Affiche la liste du staff de ce serveur")
            .addField("/info", "Affiche des informations sur VOUS")
            .addField("/link", "Affiche les liens OFFICIELS de la Fusion !")
            .setFooter("Commande d'aide")
            .setColor("#a90000")
            .setThumbnail(client.user.avatarURL)
            message.channel.sendEmbed(embed2)
        }

        if (message.content.startsWith("/info"))
        {
            var embed3 = new Discord.RichEmbed()
            .setTitle("Voici des informations sur VOUS !")
            .setDescription("Je vais récupérer le plus d'informations que je peut pour vous les donner !")
            .addField("Votre ID 👀 :", message.author.id)
            .addField("<a:DiscordHype:507092218515816450> Tag :", message.author.tag)
            .addField("<:fusion:528700963565862923> Discrimator", message.author.discriminator)
            .setFooter("Commande : /info | Commande d'aide : /aide")
            .setThumbnail(message.author.avatarURL)
            .setColor("#48bf00")
            message.channel.sendEmbed(embed3)
        }

        if (message.content.startsWith("/link"))
        {
            var embed4 = new Discord.RichEmbed()
            .setTitle("Voici les réseaux sociaux de la Fusion")
            .setDescription("Liste des réseaux sociaux :")
            .addField("Youtube Yann :", "https://www.youtube.com/channel/UC9CvWxJMXlg3K7p9mfHnxJQ")
            .addField("Twitter Fusion :", "https://twitter.com/TeamFusionOFF")
            .addField("Twitter Yann :", "https://twitter.com/YannFusionOff")
            .setFooter("Commande : /link | Commande d'aide : /aide")
            .setThumbnail(client.user.avatarURL)
            .setColor("#e30000")
            message.channel.sendEmbed(embed4)
        }

        if (message.content === '/dm')
{
    message.reply("Regarde tes MP !")
    message.member.createDM().then(channel =>
    {
        var embed = new Discord.RichEmbed()
        .setTitle("Je suis un message privé")
        .setDescription("Easter Egg : N°1 / ???")
        .setThumbnail(message.author.avatarURL)
        channel.sendEmbed(embed)
    })
}

    });

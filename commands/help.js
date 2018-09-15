const Discord = require("discord.js");

module.exports.run = function(client, db, message, args) {
	let bicon = client.user.displayAvatarURL;
	let helpEmbed = new Discord.RichEmbed()
		.setTitle(`List of all avaliable commands:`)
		.setColor(`#bc0000`)
		.setThumbnail(bicon)
		.addField(`⚜️ Administration`,	`${client.commands.filter(cmd => cmd.help.category === 'admin').map(	cmd => `\`${cmd.help.name}\``).join(`, `)}`)
		.addField(`⚒️ Moderation`, 		`${client.commands.filter(cmd => cmd.help.category === 'mod').map(		cmd => `\`${cmd.help.name}\``).join(`, `)}`)
		.addField(`👥 Member`, 			`${client.commands.filter(cmd => cmd.help.category === 'member').map(	cmd => `\`${cmd.help.name}\``).join(`, `)}`)
		.addField(`😃 Fun`, 			`${client.commands.filter(cmd => cmd.help.category === 'fun').map(		cmd => `\`${cmd.help.name}\``).join(`, `)}`)
		.addField(`🎵 Music`,			`${client.commands.filter(cmd => cmd.help.category === 'music').map(	cmd => `\`${cmd.help.name}\``).join(`, `)}`)
		.addField(`💲 Token`,			 `${client.commands.filter(cmd => cmd.help.category === 'token').map(	 cmd => `\`${cmd.help.name}\``).join(`, `)}`)
		.setFooter(`List asked by @${message.author.username}`);
	message.channel.send(helpEmbed);
}

module.exports.help = {
	name : `help`,
	category: `member`
};
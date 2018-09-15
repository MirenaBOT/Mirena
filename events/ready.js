const log = require(`./../utils/log.js`);

module.exports = async(client) => {
	client.user.setPresence({game : {name : `m!help | Ozpheln Team [FR] `, type : 0}});
	log.lf();
	log.color(`=======================================`, `FgMagenta`);
	log.color(`${client.user.username} bot connected.`, `FgMagenta`);
	log.color(`${client.user.username} online on ${client.guilds.size} server${client.guilds.size>1 ? `s` : ``}!`, `FgMagenta`);
	log.color(`${client.user.username} serves ${client.users.size} user${client.users.size>1 ? `s` : ``}!`, `FgMagenta`);
	log.color(`=======================================`, `FgMagenta`);
	log.lf();
}
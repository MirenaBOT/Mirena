const prefix = "m!";

module.exports = async (client, db, message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    var args = message.content.split(/\s+/);
    var cmd = args.shift().toLowerCase().slice(prefix.length);
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd);
    if (commandfile) return commandfile.run(client, db, message, args);
};
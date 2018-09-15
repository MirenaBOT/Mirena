const Discord = require(`discord.js`);
const client = new Discord.Client;
const sqlite3 = require(`sqlite3`).verbose();
const token = require(`./token.js`).token;
const loader = require(`./utils/loader.js`);
const log = require(`./utils/log.js`);

process.stdout.write('\033c');
client.commands = new Discord.Collection();

var db = new sqlite3.Database(`Mirena.sqlite3`, sqlite3.OPEN_READWRITE, function (error) {
    if (error) {
        log.error(error);
        return;
    }
    log.log(`Connected to Mirena database`);
    log.lf();
    loader.loadCommands(client, db);
    loader.loadEvents(client, db);
    client.login(token);
});
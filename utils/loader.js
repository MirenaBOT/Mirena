const fs = require(`fs`);
const log = require(`./log.js`);

module.exports = {
    loadCommands(client, db) {
        fs.readdir(`./commands/`, (err, files) => {
            if (err) {
                log.error(err);
                return;
            }
            var cmds = files.filter(f => f.split(`.`).pop() === `js`);
            if (cmds.length <= 0) {
                log.debug(`No command found`);
                return;
            }

            log.debug(`Loading ${files.length} command${files.length>1 ? `s` : ``}`);
            cmds.forEach((f, i) => {
                let fichier = require(`./../commands/${f}`);
                client.commands.set(fichier.help.name, fichier);
                log.debug(`${i + 1}/${files.length} Command ${f.split(`.`)[0]} loaded!`);
            });

            log.debug(`All commands got loaded\n`);
        });
    },
    loadEvents(client, db) {
        fs.readdir(`./events/`, (err, files) => {
            if (err) throw err;
            if (files.length <= 0) {
                log.debug(`No event found`);
                return;
            }
            log.debug(`Loading ${files.length} event${files.length>1 ? `s` : ``}`);

            files.forEach((f, i) => {
                const events = require(`./../events/${f}`);
                const event = f.split(`.`)[0];
                client.on(event, events.bind(null, client, db));
                delete require.cache[require.resolve(`./../events/${f}`)];
                log.debug(`${i + 1}/${files.length} Event ${event} loaded!`);
            });

            log.debug(`All events got loaded`);
        });
    }
}
const time = require("./time.js").time;
const date = require("./date.js").date;

const outputLevels = [`INFO`, `DEBUG`, `ERROR`];
const currentLevel = `INFO`;

module.exports = {

	colors: {
		Reset: "\x1b[0m",
		Bright: "\x1b[1m",
		Dim: "\x1b[2m",
		Underscore: "\x1b[4m",
		Blink: "\x1b[5m",
		Reverse: "\x1b[7m",
		Hidden: "\x1b[8m",
		FgBlack: "\x1b[30m",
		FgRed: "\x1b[31m",
		FgGreen: "\x1b[32m",
		FgYellow: "\x1b[33m",
		FgBlue: "\x1b[34m",
		FgMagenta: "\x1b[35m",
		FgCyan: "\x1b[36m",
		FgWhite: "\x1b[37m",
		BgBlack: "\x1b[40m",
		BgRed: "\x1b[41m",
		BgGreen: "\x1b[42m",
		BgYellow: "\x1b[43m",
		BgBlue: "\x1b[44m",
		BgMagenta: "\x1b[45m",
		BgCyan: "\x1b[46m",
		BgWhite: "\x1b[47m"
	},

	lf() {
		console.log();
	},

	log(message) {
		if (outputLevels.indexOf(currentLevel) <= outputLevels.indexOf(`INFO`)) {
			console.log(`[${this.colors.FgBlue}${date} ${this.colors.FgGreen}${time()}${this.colors.Reset}] [INFO] ${message}`);
		}
	},

	debug(message) {
		if (outputLevels.indexOf(currentLevel) <= outputLevels.indexOf(`DEBUG`)) {
			console.log(`[${this.colors.FgBlue}${date} ${this.colors.FgGreen}${time()}${this.colors.Reset}] ${this.colors.FgYellow}[DEBUG] ${message}${this.colors.Reset}`);
		}
	},

	error(message) {
		if (outputLevels.indexOf(currentLevel) <= outputLevels.indexOf(`ERROR`)) {
			console.log(`[${this.colors.FgBlue}${date} ${this.colors.FgGreen}${time()}${this.colors.Reset}] ${this.colors.FgRed}[ERROR] ${message}${this.colors.Reset}`);
		}
	},

	color(message, color) {
		if (outputLevels.indexOf(currentLevel) <= outputLevels.indexOf(`INFO`)) {
			console.log(`[${this.colors.FgBlue}${date} ${this.colors.FgGreen}${time()}${this.colors.Reset}] ${this.colors[color]}[INFO] ${message}${this.colors.Reset}`);
		}
	}
};
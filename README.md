This is the master branch for Mirena, if you are looking for an older version of the bot (v2), see [here](https://github.com/MirenaBOT/Mirena-v2).

# Mirena

Mirena is a multi-purposes Discord Bot.

[![GitHub issues](https://img.shields.io/github/issues/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/issues)[![GitHub forks](https://img.shields.io/github/forks/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/network)[![GitHub stars](https://img.shields.io/github/stars/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/stargazers)[![GitHub license](https://img.shields.io/github/license/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/blob/master/LICENSE)![Bot Version](https://img.shields.io/badge/version-3.0-yellow.svg)

## Types of commands

The bot has differents types of commands, including:
* Moderation
* Administration
* Member
* Fun
* Music
* Currency (token)

## FAQ

### Technical questions

* Q. What is the difference with the older version of Mirena (v2).
A. This version is using a SQLite database to store all the settings or logs. The previous version was writing the settings every 5 minuts in json files. Also, the older version was using lots of different libraries for all kinds of commands, which isn't the case now (thanks to xmlhttrequests and free API's).

* Q. Why a re there so many files to load (commands and events)?
A. The bot keeps track of everything that's happening on the server, that's why all events files are loaded in memory. Same for the commands. It just takes a bit to load when the bot is launched but otherwise the bot is quite fast.

* Q. I'd like to report a bug, how do I do it?
A. If you see any bug in the code, or you have something to say about it, please [open a new issue](https://github.com/MirenaBOT/Mirena-v2/issues/new).

* Q. I'd like to help with the programming of the bot, is it possible.
A. Sure, we are very thankfull for all the help provided. You can ask to join the project by [opening a new issue](https://github.com/MirenaBOT/Mirena-v2/issues/new) and telling you'd like to help us.

* Q. I've downloaded the bot and installed the dependencies, but there seems to be a problem with "Cairo"...
A. Yes, you need to install Cairo. Cairo is a set of libraries used by the canvas library to render images (used in the bot to greet new and leaving users, background and profile picture).

### Usage

* Q. Does this bot work on multiple servers at the time?
A. Yeah, that's kinda the purpose of this bot...

* Q. I'd like to invite Mirena in my server, how do I do it?
A. Unfortunately, it isn't possible yet. Mirena is still in developpement.

* Q. When will the bot be ready?
A. Don't know, it depends at what speed we are working.

* Q. I'd like to submit a command idea, is it possible?
A. Sure, any suggestion is welcome. Just [open a new issue](https://github.com/MirenaBOT/Mirena-v2/issues/new) with your suggestion.

* Q. The bot is in English, are you planning to add translations?
A. Not for the moment, but why not later...

* Q. I'd like to create my own command, is it possible.
A. No, this feature won't be added.

* Q. I'd like to use another type of currency than "token", is it possible.
A. Not yet, but this is planned.

* Q. Will it be possible to have multiple currencies?
A. It's not planned, but we can still change our mind.
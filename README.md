*This is the master branch for Mirena, if you are looking for an older version of the bot (v2), see [here](https://github.com/MirenaBOT/Mirena-v2).*

# Mirena

Mirena is a multi-purposes Discord Bot.

[![GitHub issues](https://img.shields.io/github/issues/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/issues)   [![GitHub forks](https://img.shields.io/github/forks/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/network)    [![GitHub stars](https://img.shields.io/github/stars/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/stargazers) [![GitHub license](https://img.shields.io/github/license/MirenaBOT/Mirena.svg)](https://github.com/MirenaBOT/Mirena/blob/master/LICENSE)    ![Bot Version](https://img.shields.io/badge/version-3.0-yellow.svg)

---

## Types of commands

The bot has differents types of commands, including:
* Moderation
* Administration
* Member
* Fun
* Music
* Currency (token)

---

## FAQ

### Usage

* Q. Is Mirena free of charges?

    A. Yes! Mirena is 100% free. Donnations are welcome if you would like to support us!

* Q. Does this bot work on multiple servers at the time?

    A. Yeah, that's kinda the purpose of this bot...

* Q. I'd like to invite Mirena in my server, how do I do it?

    A. Unfortunately, it isn't possible yet. Mirena is still in developpement.

* Q. What do I need to do to invite Mirena on my server?

    A. When the bot will be avaliable, a link will be provided. You just will need to clik on it and select the server you want Mirena to be added on. That's it. Easy right?

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

* Q. What about my personnal or server's datas? How is it managed?

    A. We take care of your privacy. The bot **doesn't collect any data** about you or the server **except some server configuration parameters** (background image, bans, warns, kicks, mutes, levels, currency). **All these datas are erased when the bot is kicked out of a server**. **This action cannot be undone**. Except that, all these datas are securely stored in a database on a private machine and **will remain private**.

* Do you have any other question? Ask your question [here](https://github.com/MirenaBOT/Mirena-v2/issues/new).

### Technical questions

* Q. What is the difference with the older version of Mirena (v2).

    A. This version is using a SQLite database to store all the settings or logs. The previous version was writing the settings every 5 minuts in json files. Also, the older version was using lots of different libraries for all kinds of commands, which isn't the case now (thanks to xmlhttrequests and free API's).

* Q. Why a re there so many files to load (commands and events)?

    A. The bot keeps track of everything that's happening on the server, that's why all events files are loaded in memory. Same for the commands. It just takes a bit to load when the bot is launched but otherwise the bot is quite fast.

* Q. May I use this code for my own bot? What's the license used for this bot?

    A. It depends. This bot is under the GNU General Public License v3 (GPL-3). Here is some of the examples of what you can, can't and must do.

    * You can use this bot for personnal/private use.
    * You can use this bot for a commercial use.
    * You can make changes to the bot's code.
    * You can share the source code of the bot (original or modified).
    * You can include (parts of) this code in another project that has a more strict license.
    * You can't hold the author liable. The code is provided "as is".
    * You must tell if the code you provide is a modified copy of the code or the original code.
    * You must provide instructions on how to get the original code.
    * You must provide the sources of your work and make it avaliable.
    * You must describe all the changes applied to the original code.
    * You must include the copyright notice in all copies or substantial uses of the code.
    * You must include the license notice in all copies or substantial uses of the code.

* Q. I'd like to report a bug, how do I do it?

    A. If you see any bug in the code, or you have something to say about it, please [open a new issue](https://github.com/MirenaBOT/Mirena-v2/issues/new).

* Q. I'd like to help with the programming of the bot, is it possible.

    A. Sure, we are very thankfull for all the help provided. You can ask to join the project by [opening a new issue](https://github.com/MirenaBOT/Mirena-v2/issues/new) and telling you'd like to help us.

* Q. I've downloaded the bot and installed the dependencies, but there seems to be a problem with "Cairo"...

    A. Yes, you need to install Cairo. Cairo is a set of libraries used by the canvas library to render images (used in the bot to greet new and leaving users, background and profile picture).

* Q. What kind of database are you using, and why.

    A. SQLite. We don't currently need big databases nor database server. Also SQLite has a nice library, especially sqlite3 taht has extra datatypes support and other nice features.

---

## Installation

0. Prerequisites
    * Any file editor (except Word-like, notepad is fine)
    * And SQLite software.
    * NPM

1. Clone this repo.
    You can either download it as an archive or clone it via command line.
    ```bash
    git clone https://github.com/MirenaBOT/Mirena.git
    ```

2. Install the dependencies.

    1. Make sure you have [npm](https://www.npmjs.com/) installed.
    2. Install the dependencies by running in the code's folder
    ```bash
    npm i --save
    ```

3. Add your token.
    1. Create a file in the folder's root named `token.js`
    2. The content of your file must be like the following:
    ```javascript
    module.exports.token = "your token goes here"
    ```
    3. Put your token between the two quotation marks.

4. Add the database.
    1. Create a new `SQLite3` database named `Mirena.sqlite3`. (You can give it another name but don't forget to change the name in the `index.js` file, line 11)
    2. Run those commands to create the needed tables.
    ```SQL
    CREATE TABLE `Bans` (
        `ServerID`	TEXT NOT NULL,
        `UserID`	TEXT NOT NULL,
        `Date`	INTEGER NOT NULL,
        `Reason`	TEXT,
        `AuthorID`	TEXT NOT NULL,
        `Duration`	INTEGER NOT NULL,
        PRIMARY KEY(`ServerID`,`UserID`,`Date`)
    );

    CREATE TABLE `Kicks` (
        `ServerID`	TEXT NOT NULL,
        `UserID`	TEXT NOT NULL,
        `Date`	INTEGER NOT NULL,
        `Reason`	TEXT,
        `AuthorID`	TEXT NOT NULL,
        PRIMARY KEY(`ServerID`,`UserID`,`Date`)
    );

    CREATE TABLE `Levels` (
        `ServerID`	TEXT NOT NULL,
        `UserID`	TEXT NOT NULL,
        `Experience`	INTEGER NOT NULL,
        PRIMARY KEY(`ServerID`,`UserID`)
    );

    CREATE TABLE `Mutes` (
        `ServerID`	TEXT NOT NULL,
        `UserID`	TEXT NOT NULL,
        `Date`	INTEGER NOT NULL,
        `Reason`	TEXT,
        `AuthorID`	TEXT NOT NULL,
        `Duration`	INTEGER NOT NULL,
        PRIMARY KEY(`ServerID`,`UserID`,`Date`)
    );

    CREATE TABLE `Tokens` (
        `ServerID`	TEXT NOT NULL,
        `UserID`	TEXT NOT NULL,
        `Token`	INTEGER NOT NULL,
        `IsAdmin`	TEXT NOT NULL,
        PRIMARY KEY(`ServerID`,`UserID`)
    );

    CREATE TABLE `Warns` (
        `ServerID`	TEXT NOT NULL,
        `UserID`	TEXT NOT NULL,
        `Date`	INTEGER NOT NULL,
        `Reason`	TEXT,
        `AuthorID`	TEXT NOT NULL,
        PRIMARY KEY(`ServerID`,`UserID`,`Date`)
    );

    CREATE TABLE `General` (
        `ServerID`	TEXT NOT NULL,
        `Image`	TEXT,
        `Currency`	TEXT,
        PRIMARY KEY(`ServerID`)
    );
    ```

## Run the bot
0. Prerequisites
    * Any file editor (except Word-like, notepad is fine)
    * And SQLite software.
    * NPM
    * NodeJs

    1. Make sure you have [NodeJs](https://nodejs.org) installed. This bot has been designed for Node (Carbon) `8.9.4` but also run in newer versions (tested with `8.12.0`). You may encounter some issues if you are using an unstable version, older version, newer version. Run the command
    ```bash
    node -v
    ```
    to check the version of your installed NodeJs software.

2. Run the bot. Type
    ```bash
    node .
    ```
    or
    ```bash
    node index.js
    ```

## Authors
* Project Managers:
    * Katerina
    * Almytie
* Programmers
    * Kévin
    * Ascor8522
    * Draco1544
* Graphic designer
    * Siren


## License
To learn more about the license we are using, reffer to the FAQ section (Question: May I use this code for my own bot? What's the license used for this bot?)
Full license details in the `LICENSE` file
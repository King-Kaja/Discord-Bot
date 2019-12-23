var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'w!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];

        //args = args.splice(0,2);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'life':
                bot.sendMessage({
                      to: channelID,
                      message: 'I am alive.'
                });
            break;
            // Just add any case commands if you want to..
         }

     }
     if ((message.toLowerCase().substring(0, 3) == 'im ') || (message.toLowerCase().substring(0, 4) == 'i\'m ')) {
       bot.sendMessage({
           to: channelID,
           message: 'STFU Yui'
       });

          }
});

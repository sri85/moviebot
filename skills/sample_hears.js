module.exports = function(controller) {


  controller.hears('test','message_received', function(bot, message) {

    bot.reply(message,'I heard a test');

  });
  controller.hears('ping','message_received', function(bot, message) {

    bot.reply(message,'pong');

  });

  controller.hears('typing','message_received', function(bot, message) {

    bot.reply(message,{
      text: 'This message used the automatic typing delay',
      typing: true,
    }, function() {

      bot.reply(message,{
        text: 'This message specified a 1000ms typing delay',
        typingDelay: 1000,
      });
    });
  });
};

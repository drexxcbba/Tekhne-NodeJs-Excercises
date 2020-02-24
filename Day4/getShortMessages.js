function getShortMessages(messages) {
      return messages.filter(function (one) {
        return one.message.length < 50;
      }).map(function (two){ return two.message});
    }
    
module.exports = getShortMessages


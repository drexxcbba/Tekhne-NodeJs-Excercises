function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (one){
          return goodUsers.some(function (two){
            return one.id === two.id;
          })
        });
      };
    }
    
module.exports = checkUsersValid
    

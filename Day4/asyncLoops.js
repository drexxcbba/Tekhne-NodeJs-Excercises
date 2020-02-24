function loadUsers(userIds, load, done) {
    let users = []
    for (let i = 0; i < userIds.length; i++) {
      load(userIds[i],(function (actual){
          if(actual){
              users.push(actual);
          }
          if(userIds.length === users.length){
              done(users);
          }
      }));
    }
  }
  
  module.exports = loadUsers

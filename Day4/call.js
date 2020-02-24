function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(one) {
        return Object.prototype.hasOwnProperty.call(one, 'quack')
      }).length
    }
    
module.exports = duckCount


/*function prueba(one,two,three,four){
  console.log(Array.prototype.slice.call(arguments).filter(function(one){
    return one > 2;
  }));
}

prueba(4,1,2,3);
*/
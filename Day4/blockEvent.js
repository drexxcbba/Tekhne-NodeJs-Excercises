function repeat(operation, num) {
      if (num <= 0) return
      operation()
      setImmediate((function (){
          return repeat(operation,num-1);
      }),100);
    }
    
module.exports = repeat

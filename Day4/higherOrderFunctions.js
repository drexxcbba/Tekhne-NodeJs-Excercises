function print(num){

     console.log(num);
}

function repeat(operation, num) {
      
      if(num > 0){
         operation(num);
         repeat(operation,num-1);
      }  
}
module.exports = repeat

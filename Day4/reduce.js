function countWords(inputWords) {
      let res = {};
      inputWords.reduce((function(mapa,one){
                          if(!mapa[one.toString()])
                              mapa[one.toString()] = 1;
                          else
                             mapa[one.toString()] ++;
      return mapa;
      }),res);
      return res;    
    }
    
module.exports = countWords

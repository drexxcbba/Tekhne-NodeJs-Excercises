//Scopes

function foo(){

   var bar;
}

//Scopes chains

function foo(){

   var bar;
   function zip(){
     
      var quux;
   }
}

//Global Scope & Shadowing

function foo(){

   var bar;
   quux = 1;
   function zip(){
     
      var quux = 2;
   }
}

//Closures

function foo(){

   var bar;
   function zip(){
     
      bar = true;
      var quux;
   }
   return zip();
}

//Garbage Collection









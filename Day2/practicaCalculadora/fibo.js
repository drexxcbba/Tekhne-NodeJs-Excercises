function fibo(n){
  if(n == 1 || n == 0){
    return n;
  }else{
    return fibo(n-1)+fibo(n-2);
  }
}
var lista = [];
function llenar(n){
  for(i = 0;i <= n;i++){
    lista.push(fibo(i));
  }
}
function mostrar(){
  for(i = 0;i <= lista.length;i++){
    console.log(lista[i]);
  }
}
llenar(8)
mostrar();

function calcular(){

  let cad = document.getElementById("texto1").value;
  let cont = 0;
  let pos = 0;
  let c = '';
  for (i = 0; i < cad.length; i++) {
    if (cad.charAt(i) == '+' ||
      cad.charAt(i) == '-' ||
      cad.charAt(i) == '/' ||
      cad.charAt(i) == '*') {
      cont++;
      pos = i;
      c = cad.charAt(i);
    }
  }
  if (cont == 1) {
    let aux1 = cad.substring(0, pos);
    let aux2 = cad.substring(pos+1, cad.length)
    let num1 = Number.parseInt(aux1, 10);
    let num2 = Number.parseInt(aux2, 10);
    if (c == '+') {
      console.log(num1 + num2);
    }
    if (c == '-') {
      console.log(num1 - num2);
    }
    if (c == '*') {
      console.log(num1 * num2);
    }
    if (c == '/') {
      console.log(num1 / num2);
    }
  } else {
    console.log(0);
  }
}
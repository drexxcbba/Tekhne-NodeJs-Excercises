class Stack {

  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      if (this.items.length == 0)
          return "Underflow";
      return this.items.pop();
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  empty() {
      return this.items.length == 0;
  }

  printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++)
          str += this.items[i] + " ";
      return str;
  }

}

function hasPrecedence(op1, op2) {
  if (op2 == '(' || op2 == ')')
      return false;
  if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
      return false;
  else
      return true;
} 

function applyOp(op, b, a)
{
  switch (op) {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '*':
          return a * b;
      case '/':
          if (b == 0)
              throw new
                  UnsupportedOperationException("Cannot divide by zero");
          return a / b;
  }
  return 0;
}

function isDigit(c) {
  if (c == '0' || c == '1' || c == '2' || c == '3' || c == '4'
      || c == '5' || c == '6' || c == '7' || c == '8' || c == '9') {
      return true;
  } else {
      return false;
  }
}

function evaluate() {
  let expression = document.getElementById("texto2").value;
  let tokens = expression.split("");
  let values = new Stack();
  let ops = new Stack();

  for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] == ' ')
          continue;

      if (isDigit(tokens[i])) {
          let aux = "";
          while (i < tokens.length && isDigit(tokens[i])) {
              aux += tokens[i];
              i++;
          }
          values.push(Number.parseInt(aux));
      }

      else if (tokens[i] == '(')
          ops.push(tokens[i]);

      else if (tokens[i] == ')') {
          while (ops.peek() != '(')
              values.push(applyOp(ops.pop(), values.pop(), values.pop()));
          let aux = ops.pop();
      }

      else if (tokens[i] == '+' || tokens[i] == '-' ||
          tokens[i] == '*' || tokens[i] == '/') {

          while (!ops.empty() && hasPrecedence(tokens[i], ops.peek()))
              values.push(applyOp(ops.pop(), values.pop(), values.pop()));

          ops.push(tokens[i]);
      }
  }

  while (!ops.empty())
      values.push(applyOp(ops.pop(), values.pop(), values.pop()));

  while(!values.empty()){
    console.log(values.pop());
  }
}


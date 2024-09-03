function verificaFibonacci(numero) {
    let a = 0, b = 1, temp;
  
    while (b < numero) {
      temp = b;
      b = a + b;
      a = temp;
    }
  
    if (b === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
  }
  
  let numero = 13;
  let resultado = verificaFibonacci(numero);
  console.log(resultado);
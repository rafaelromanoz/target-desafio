function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    return stringInvertida;
  }
  
  let strOriginal = "Exemplo de string";
  
  let strInvertida = inverterString(strOriginal);
  console.log("String original:", strOriginal);
  console.log("String invertida:", strInvertida);
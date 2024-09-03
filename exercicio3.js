const faturamentoDiario = [1000, 500, 2000, 1500, 0, 3000, 800];

const mediaMensal = faturamentoDiario.reduce((soma, valor) => soma + valor, 0) / faturamentoDiario.length;

const menorFaturamento = Math.min(...faturamentoDiario);
const maiorFaturamento = Math.max(...faturamentoDiario);

const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Número de dias acima da média mensal:", diasAcimaDaMedia);
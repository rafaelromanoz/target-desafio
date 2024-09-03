const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

let faturamentoTotal = 0;
for (const estado in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[estado];
}

for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    console.log(`Estado: ${estado} - Percentual: ${percentual.toFixed(2)}%`);
}
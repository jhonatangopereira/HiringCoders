var totalDivida = 1400;

function atualizarDivida(valorRecebido) {
    totalDivida -= valorRecebido;
    return totalDivida;
}

for (var i = 0; i < 12; i ++) {
    atualizarDivida(70);
}

console.log(totalDivida);
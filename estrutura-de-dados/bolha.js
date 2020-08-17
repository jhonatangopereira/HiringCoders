var elementos = [10, 9, 8, 7, 6 , 5, 4, 3, 2, 1];

function bolha() {
    let aux, inicio = 0, fim = elementos.length - 1;
    for (vezes = 0; vezes < elementos.length; vezes ++) {
        for (pos = inicio; pos < fim - vezes; pos ++) {
            if (elementos[pos] > elementos[pos + 1]){
                aux = elementos[pos];
                elementos[pos] = elementos[pos + 1];
                elementos[pos + 1] = aux;
            }
        }
    }
}

bolha();
console.log(elementos);

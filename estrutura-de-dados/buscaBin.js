var elementos = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function buscaBin(num) {
    let inicio = 0, meio, fim = elementos[elementos.length - 1];
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        if (num == elementos[meio])
            return meio;
        else {
            if (num > elementos[meio])
                inicio = meio + 1;
            else
                fim = meio - 1;
        }
    }
    return -1;
}

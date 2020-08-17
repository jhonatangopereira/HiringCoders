var elementos = [5, 8, 10, 22, 38, 45];

function buscaSeq(num){
    for (i = 0; i < elementos.length; i ++) {
        if (num == elementos[i])
            return i;
    }
    return -1;
}

var elementos = [];
var topo = -1;
const max = 10;

function push(num){
    if (topo < max){
        topo ++;
        elementos[topo] = num;
    }
    else
        console.log("Pilha está cheia.");
}

function pop(){
    if (topo != -1){
        let num = elementos[topo]; // 'let' representa uma variável local.
        topo --;
        return num;
    } else
        console.log("Pilha está vazia.")
}

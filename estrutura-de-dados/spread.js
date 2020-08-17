let lista = [1, 2, 5];
let listaIncluir = [3, 4];

// Forma mais trabalhosa de inserção de elementos numa lista.
for (let i = 0; i < listaIncluir.length; i ++) {
    for (let j = 0; j < lista.length; j ++) {
        if (lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j ++;
        }
    }
}

console.log(lista);

const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

let arr = ['a', 'b', 'c'];

// As listas possuem a mesma referência.
let arr2 = arr;

console.log(arr2);

arr2.push('d');

console.log(`ARR: ${arr}`);
console.log(`ARR2: ${arr2}`);

// A lista arr2 é uma cópia da lista arr.
arr2 = [...arr];
arr2.push('e');

console.log(`ARR: ${arr}`);
console.log(`ARR2: ${arr2}`);

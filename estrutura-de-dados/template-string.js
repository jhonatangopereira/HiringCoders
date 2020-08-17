let nome = "John";
let curso = "Engenharia de Computação";

// Sem template string
console.log(
    'Olá, eu sou ' + 
    nome + ' e estudo ' +
    curso + '.'
);

// Com template string
console.log(`Olá, eu sou ${nome} e estudo ${curso}.`);

console.log(`O resultado de 1 + 1 é ${1 + 1}.`);

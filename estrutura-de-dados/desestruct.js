const pessoa = {
    nome: "John",
    sobrenome: "Oliveira",
    idade: 19,
    profissao: "Estudante"
};

console.log(pessoa);

let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;

let { nome, sobrenome, idade, profissao } = pessoa;



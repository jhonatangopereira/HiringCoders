// Função padrão
function Soma(a, b) {
    return a + b;
}

// Constante recebendo função.
const multiplicacao = function(a, b) {
    return a * b;
};

// Constante recebendo arrow function.
const divisao = (a, b) => {
    return a / b;
};

// Objeto criado com arrow function.
const objeto = () => ({ nome : 'John', sobrenome : 'Oliveira' });

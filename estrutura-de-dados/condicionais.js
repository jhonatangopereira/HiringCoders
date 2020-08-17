var nome = "John";

if (nome === "John") {
    console.log("Legal! Seu nome é este mesmo.");
} else {
    console.log('Poxa! Seu nome não é John.');
}

switch (nome) {
    case 'John':
        console.log('Seu nome é John.');
        break;
    default:
        console.log('Você não é quem eu estou procurando.');
        break;
}

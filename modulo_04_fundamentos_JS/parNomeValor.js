// Par Nome/Valor

const saudacao = 'Opa' // Contexto Léxico 1 (Local onde a variável foi definida)

function exec() {
    const saudacao = 'Falaaaa' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
vetorInteiro = [1, 2, 3, 4];
vetorString = ['Olá', 'Teste', 'OK', 'Mundo'];
vetorDouble = [0.5, 0.25, 0.1, 0.75];

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
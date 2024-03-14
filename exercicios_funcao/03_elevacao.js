//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  

function elevacao (base, expoente) {
    for (let i = 1; i < expoente; i++){
        return base ** expoente;
    }
}

console.log(elevacao(2 ,3));
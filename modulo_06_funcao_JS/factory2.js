function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Caneta', 5));
console.log(criarProduto('Notebook', 3199));
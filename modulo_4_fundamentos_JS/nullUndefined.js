let valor; // não inicializada
console.log(valor); // valor = Undefined

valor = null; // ausência de Valor
console.log(valor);
// console.log(valor.toString()) // ERRO

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evite atribuir Undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);

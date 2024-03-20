function  conta(codProd, qtd) {
    switch (codProd) {
        case 100:
            return `Foram comprados ${qtd} Cachorros Quentes, Totalizando R$ ${qtd * 3.00}`
            break;
        case 200:
            return `Foram comprados ${qtd} Hambúrguer Simples, Totalizando R$ ${qtd * 4.00}`
            break;
        case 300:
            return `Foram comprados ${qtd} Cheeseburguer, Totalizando R$ ${qtd * 5.50}`
            break;
        case 400:
            return `Foram comprados ${qtd} Bauru, Totalizando R$ ${qtd * 7.50}`
            break;
        case 500:
            return `Foram comprados ${qtd} Refrigerante, Totalizando R$ ${qtd * 3.5}`
            break;
        case 600:
            return `Foram comprados ${qtd} Suco, Totalizando R$ ${qtd * 2.80}`
            break;
        default:
            return "O produto não existe."
            break;
    }
}

console.log(conta(100, 3));
console.log(conta(200, 3));
console.log(conta(300, 3));
console.log(conta(400, 3));
console.log(conta(500, 3));
console.log(conta(600, 3));
console.log(conta(5721, 3));
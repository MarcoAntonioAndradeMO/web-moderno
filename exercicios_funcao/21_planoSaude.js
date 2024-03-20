function calculaPlano(idade) {
    if (idade <= 10) {
        return `O Valor do plano é R$180,00 na idade ${idade}`;
    } else if (idade > 10 && idade <= 30) {
        return `O Valor do plano é R$150,00 na idade ${idade}`;
    } else if (idade > 30 && idade <= 60) {
        return `O Valor do plano é R$195,00 na idade ${idade}`;
    } else if (idade > 60) {
        return `O Valor do plano é R$230,00 na idade ${idade}`;
    } else {
        return "Idade Inválida";
    }
}

console.log(calculaPlano(9));
console.log(calculaPlano(10));
console.log(calculaPlano(25));
console.log(calculaPlano(40));
console.log(calculaPlano(60));
console.log(calculaPlano(95));
console.log(calculaPlano('bwidcbsk'));

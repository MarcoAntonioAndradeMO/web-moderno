function calculaAssociacao(mes, anuidade) {
    if(mes > 0 && mes < 13) {
        atraso = mes - 1;
        return (anuidade * ((1 + (5/100))**atraso)).toFixed(2);
    } else {
        return 'Mês inválido.';
    }
}

console.log(calculaAssociacao(1, 100));
console.log(calculaAssociacao(2, 100));
console.log(calculaAssociacao(3, 100));
console.log(calculaAssociacao(4, 100));
console.log(calculaAssociacao(5, 100));
console.log(calculaAssociacao(6, 100));
console.log(calculaAssociacao(7, 100));
console.log(calculaAssociacao(8, 100));
console.log(calculaAssociacao(9, 100));
console.log(calculaAssociacao(10, 100));
console.log(calculaAssociacao(11, 100));
console.log(calculaAssociacao(12, 100));
console.log(calculaAssociacao(16, 100));




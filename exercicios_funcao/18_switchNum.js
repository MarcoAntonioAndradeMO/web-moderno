function escreveNum(num) {
    switch(num){
        case 1:
            return "Um";
            break;
        case 2:
            return "Dois";
            break;
        case 3:
            return "Três";
            break;
        case 4:
            return "Quatro";
            break;
        case 5:
            return "Cinco";
            break;
        case 6:
            return "Seis";
            break;
        case 7:
            return "Sete";
            break;
        case 8:
            return "Oito";
            break;
        case 9:
            return "Nove";
            break;
        case 10:
            return "Dez";
            break;
        default:
            return "Número fora do Intervalo";
            break;
    }
}

console.log(escreveNum(1));
console.log(escreveNum(2));
console.log(escreveNum(3));
console.log(escreveNum(4));
console.log(escreveNum(5));
console.log(escreveNum(6));
console.log(escreveNum(7));
console.log(escreveNum(8));
console.log(escreveNum(9));
console.log(escreveNum(10));
console.log(escreveNum(15));

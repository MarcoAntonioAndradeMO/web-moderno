function diaDaSemana(num){
    switch(num) {
        case 1:
            return 'Final de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
        case 7:
            return 'Final de semana'
        default:
            return 'Dia Inválido'
    }

}

console.log(diaDaSemana(1));
console.log(diaDaSemana(2));
console.log(diaDaSemana(3));
console.log(diaDaSemana(4));
console.log(diaDaSemana(5));
console.log(diaDaSemana(6));
console.log(diaDaSemana(7));
console.log(diaDaSemana('a'));
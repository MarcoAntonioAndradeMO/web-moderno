function aumentoSalario(plano, salario){
    switch (plano) {
        case "a":
            return salario * 1.1;
            break;
        case "b":
            return salario * 1.15;
            break;
        case "c":
            return salario * 1.20;
            break;
    
        default:
            return "O Plano escolhido é Inválido";
            break;
    }
}

console.log(aumentoSalario('a', 10000));
console.log(aumentoSalario('b', 10000));
console.log(aumentoSalario('c', 10000));
console.log(aumentoSalario('d', 10000));
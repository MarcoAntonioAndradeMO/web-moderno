function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "soma":
            return num1 + num2
            break;
        case "subtrai":
            return num1 - num2
            break; 
        case "multiplica":
            return num1 * num2
            break;
        case "divide":
            return num1 / num2
            break;
        default:
            return "Operação Não identificada"
            break;
    }
}

console.log(calculadora(5, 3, "soma"));
console.log(calculadora(5, 3, "subtrai"));
console.log(calculadora(5, 3, "multiplica"));
console.log(calculadora(5, 3, "divide"));
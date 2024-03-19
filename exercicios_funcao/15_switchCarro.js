function escolheCarro(carro) {
    switch (carro) {
        case "hatch":
            return "Compra efetuada com sucesso.";
            break;
        case "caminhonete":
        case "sedan":
        case "motocicleta":
            return "Tem certeza que não prefere um hatch ?";
            break;
    
        default:
            return "Não trabalhamos com esse tipo de veículo.";
            break;
    }
}

console.log(escolheCarro("hatch"));
console.log(escolheCarro("caminhonete"));
console.log(escolheCarro("sedan"));
console.log(escolheCarro("motocicleta"));
console.log(escolheCarro("SUV"));
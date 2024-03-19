function escolheFruta(fruta) {
    switch (fruta) {
        case "maçã":
            return "Não Vendemos essa fruta Aqui";
            break;
        case "kiwi":
            return "Estamos com escassez de Kiwis";
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo.";
            break;
        default:
            return "Não entendi seu Pedido"
            break;
    }
}

console.log(escolheFruta("maçã"));
console.log(escolheFruta("kiwi"));
console.log(escolheFruta("melancia"));
console.log(escolheFruta("banana"));
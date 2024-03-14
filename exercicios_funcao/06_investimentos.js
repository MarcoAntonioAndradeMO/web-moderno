function investSimples(capitalInicial, taxaJuros, tempo) {
    return capitalInicial + (capitalInicial * taxaJuros * tempo);
}

function investComposto(capitalInicial, taxaJuros, tempo) {
    return capitalInicial + (capitalInicial * (1 + (taxaJuros / tempo)) ** (taxaJuros * tempo));
}

console.log(investSimples(5000, 0.12, 5));

console.log(investComposto(5000, 0.12, 5));
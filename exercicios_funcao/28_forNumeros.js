function lerNumeros(vetor) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            pares.push(vetor[i]);
        } else {
            impares.push(vetor[i]);
        }
    }

    console.log("Números pares:", pares);
    console.log("Números ímpares:", impares);
}

lerNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
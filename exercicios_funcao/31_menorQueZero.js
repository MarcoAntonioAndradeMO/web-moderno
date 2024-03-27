function menorQueZero(vetor) {
    cont = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            cont += 1;
        }
    }
    console.log(cont);
}

menorQueZero([-5, 10, 6, 36, -69, -3]);
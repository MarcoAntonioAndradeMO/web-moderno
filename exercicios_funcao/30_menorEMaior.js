function menorMaior(vetor) {
    let mininmo = vetor[0];
    let maximo = vetor[0];

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maximo) {
            maximo = vetor[i];
        }
        if (vetor[i] < mininmo) {
            mininmo = vetor[i];
        }
        
    }
    console.log(mininmo, maximo);
}

menorMaior([6,5,9,10,25,3,91,7]);
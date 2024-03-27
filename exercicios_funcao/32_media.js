function mediaVet(vetor) {
    let total = 0
    let div = vetor.length

    for (let i = 0; i < vetor.length; i++){
        total += vetor[i]
    }

    media = total / div

    console.log(media);
}


mediaVet([5, 10, 15]);
mediaVet([5, 95, 60, 20, 65, 31, 75]);
mediaVet([5, 10, 659, 9]);
mediaVet([5, 15]);

function crescimento(altura1, altura2, cresc1, cresc2) {
    if (altura1 != altura2 && cresc1 != cresc2) {
        if (altura1 > altura2 && cresc1 > cresc2) {
            return "O primeiro é mais alto e será mais alto.";
        } else if (altura2 > altura1 && cresc2 > cresc1) {
            return "O segundo será mais alto.";
        } else if (altura1 > altura2 && cresc2 > cresc1) {
            let ano = 1;
            while (altura2 < altura1) {
                altura2 += cresc2;
                altura1 += cresc1;
                ano += 1;
            }
            return `O segundo será mais alto que o primeiro em ${ano} anos.`;
        } else if (altura2 > altura1 && cresc1 > cresc2) {
            let ano = 1;
            while (altura1 < altura2) {
                altura2 += cresc2;
                altura1 += cresc1;
                ano += 1;
            }
            return `O Primeiro será mais alto que o Segundo em ${ano} anos.`;
        }
    } else if (altura1 == altura2 && cresc1 != cresc2) {
        if (cresc1 > cresc2) {
            let ano = 0;
            while (altura1 == altura2) {
                altura2 += cresc2;
                altura1 += cresc1;
                ano += 1;
            }
            return `O Primeiro será mais alto que o Segundo em ${ano} anos.`;
        } else if (cresc2 > cresc1) {
            let ano = 0;
            while (altura1 == altura2) {
                altura2 += cresc2;
                altura1 += cresc1;
                ano += 1;
            }
            return `O Segundo será mais alto que o Primeiro em ${ano} anos.`;
        }
    } else {
        return "Os dois têm a mesma altura e a mesma taxa de crescimento.";
    }
}

console.log(crescimento(150, 140, 10, 5));
console.log(crescimento(140, 150, 5, 10));
console.log(crescimento(140, 150, 10, 5));
console.log(crescimento(150, 140, 5, 10));
console.log(crescimento(150, 150, 10, 5));
console.log(crescimento(150, 150, 3, 10));
console.log(crescimento(150, 150, 10, 10));
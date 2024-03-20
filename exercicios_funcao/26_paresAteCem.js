let contador = 1;
let pares = [];

while (contador <= 100) {
    if (contador % 2 == 0) {
        pares.push(contador);
        contador += 1;
    } else {
        contador += 1;
    }
}

console.log(`Os números Pares são ${pares}`);
// Tomar cuidado na utilização Quebra do fluxo do programa.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break // Quebra no índice 5
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // Pula o índice selecionado
    }
    console.log(`${y} = ${nums[y]}`)
}

// Ambas estruturas alteram o fluxo do programa.

externo: for (a in  nums) {
    for (b in nums) {
        if( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

// Evitar esse tipo de estrutura.
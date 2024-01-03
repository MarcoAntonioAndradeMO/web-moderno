const escola = "cod3r";

console.log(escola.charAt(4)); // retorna o item de indice 4
console.log(escola.charAt(5)); // retorna  vazio (não possui esse index no exemplo)
console.log(escola.charCodeAt(3)); // Mostra em ASCII
console.log(escola.indexOf('3')); // Seleciona o index do item "3" 

console.log(escola.substring(1)); //seleciona uma substring com base no índice
console.log(escola.substring(0,3)); // seleciona uma substring com base no intervalo

console.log('Escola'.concat(escola) + ('!')); // Concatenação
console.log(escola.replace(3, "e")); // Substitui todos os "3" por "e"

console.log('Ana,Maria,Pedro'.split(","));
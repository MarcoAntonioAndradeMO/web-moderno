const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); //Remove o último elemento do Array
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona ao final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona na primeira posição do array
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//remover
pilotos.splice(3, 1);
console.log(pilotos);

// gera um novo array com base no intervalo definido

const algunsPilotos1 = pilotos.slice(2); // Novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
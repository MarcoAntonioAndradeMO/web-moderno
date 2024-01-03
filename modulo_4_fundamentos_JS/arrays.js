const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // Valor Indefinido

valores[4] = 10; // atribuindo valor ao indice
console.log(valores);
console.log(valores.length); // tamanho do array

valores.push({id: 3}, false, null, 'teste'); // insere os itens no array
console.log(valores);

console.log(valores.pop()); //remove o ultimo índice do array
delete valores[0]; // Deleta valor do índice dado
console.log(valores);

console.log(typeof valores); // retorna os tipos do array
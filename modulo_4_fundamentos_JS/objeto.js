const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40; // Evitar Atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
};

'{"nome": "Camisa Polo", "preco": 79.90}' // json = formato textual ==> Trocar dados entre sistemas
//Podemos gerar um json a partir de um objeto

console.log(prod2);

//O objeto em JS é uma coleção de Chave-Valor
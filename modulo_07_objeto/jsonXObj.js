/*
JSON = Formato textual genérico
Comunica com tecnologias diferentes, compatível com várias linguagens
Muito utilziado em Web Service

O JSON É um formato de dados, não executa funções
*/

const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c} };
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}'));
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] } '))
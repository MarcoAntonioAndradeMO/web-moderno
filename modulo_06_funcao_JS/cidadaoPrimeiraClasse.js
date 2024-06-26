//Função de Alta Ordem
//Função de Primeira classe (A função funciona como um dado)

// Criar de forma Literal
function fun1(parametros) {

};

//Armazenar Variáveis
const fun2 = function() { };

//Armazenar em um array
const array = [function (a,b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3));

//Armazenar em um atributo de Objeto
const obj = {};
obj.falar = function () {return 'Opa!'};
console.log(obj.falar());;

//Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') });

// Uma Função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log´(a + b + c)
    }
}

soma(2,3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
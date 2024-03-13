function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa;
p1.falar();
console.log(p1.nome);

// Podemos criar objetos atraves de uma Função Construtora, Função Factory ou Classe.
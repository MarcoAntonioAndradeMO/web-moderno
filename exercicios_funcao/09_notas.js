//Notas abaixo de 40 = reprovado
// se a diferença entre a nota e o próximo multiplo de 5 < 3 arredonda para o próximo multiplo
// se a nota for menor que 38, não será arredondado

function avaliaNota(avaliacao) {
    let nota = avaliacao;
    let notaArredondada;

    if (nota < 38) {
        return "Aluno Reprovado";
    } else if (nota % 5 >= 3) {
        if (nota % 5 == 3){
            let notaArredondada = nota + 2;
            return `O aluno foi aprovado com a nota arredondada de ${notaArredondada}`;
        } else if (nota % 5 == 4){
            let notaArredondada = nota + 1;
            return `O aluno foi aprovado com a nota arredondada de ${notaArredondada}`;
        }
    } else {
        return `Aluno Aprovado com ${nota}`;
    }
}

console.log(avaliaNota(35));
console.log(avaliaNota(38));
console.log(avaliaNota(50));
console.log(avaliaNota(42));
console.log(avaliaNota(39));
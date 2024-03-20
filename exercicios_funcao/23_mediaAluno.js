// (maior nota * 4, restantes * 3) / 10
// Mostrar código do aluno e suas três notas
// retornar "APROVADO" caso media >= 5
// retornar "REPROVADO" caso media < 5

function calculaNota(cod, nota1, nota2, nota3) {
    if (nota1 > nota2 && nota1 > nota3) {
        let media = (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10);
        if (media >= 5){
            return `O aluno de Código: ${cod} está APROVADO com média ${media}`;
        } else {
            return `O aluno de Código: ${cod} está REPROVADO com média ${media}`;
        }
    } else if (nota2 > nota1 && nota2 > nota3) {
        let media = (((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10);
        if (media >= 5){
            return `O aluno de Código: ${cod} está APROVADO com média ${media}`;
        } else {
            return `O aluno de Código: ${cod} está REPROVADO com média ${media}`;
        }
    } else if (nota3 > nota1 && nota3 > nota2) {
        let media = (((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10);
        if (media >= 5){
            return `O aluno de Código: ${cod} está APROVADO com média ${media}`;
        } else {
            return `O aluno de Código: ${cod} está REPROVADO com média ${media}`;
        }
    } else {
        return "ERRO."
    }
}

console.log(calculaNota("COD189849", 6, 5, 5));
console.log(calculaNota("COD185487", 6, 2, 3));
console.log(calculaNota("COD183291", 3, 9, 6));
console.log(calculaNota("COD189810", 1, 5, 3));
console.log(calculaNota("COD189111", 6, 9, 5));
console.log(calculaNota("COD189222", 6, 5, 10));
console.log(calculaNota("COD189444", 2, 3, 4));

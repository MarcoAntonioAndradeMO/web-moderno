// Função para determinar o Tipo do Triangulo
// Três lados iguais = EQUILATERO
// Dois lados iguais = ISOSCELES
// Três lados Diferentes = ESCALENO 

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "Equilátero";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

console.log(tipoTriangulo(3, 3, 3));
console.log(tipoTriangulo(3, 4, 3));
console.log(tipoTriangulo(1, 2, 3));

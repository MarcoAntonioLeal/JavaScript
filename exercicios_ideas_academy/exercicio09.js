/*Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;*/

function ladosDoTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
        return 'Triângulo equilátero'
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        return 'Triângulo escaleno'
    } else {
        return 'Triângulo isósceles'
    }
}

console.log(ladosDoTriangulo(30, 20, 20))
console.log(ladosDoTriangulo(30, 30, 30))
console.log(ladosDoTriangulo(30, 45, 90))
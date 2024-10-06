/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function classificacaoLadoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        return 'Esse triângulo tem os três lados iguais portanto ele é equilátero';
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return 'Esse triângulo tem os 2 lados iguais portanto ele é isósceles';
    }
    else {
        return 'Esse triângulo tem os três lados diferentes portanto ele é escaleno';
    }
}
console.log(classificacaoLadoTriangulo(50, 50, 50));

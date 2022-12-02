// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function classficacaoDeTriangulo(ladoA = 1, ladoB = 1, ladoC = 1) {
    if (ladoA == ladoB == ladoC) {
        console.log('Esse triângulo tem os três lados iguais, portanto ele é equilátero')
    } else if (ladoA == ladoB && ladoA != ladoC && ladoB != ladoC) {
        console.log('Esse triângulo tem dois lados iguais, portanto ele é isósceles')
   } else if (ladoA == ladoC && ladoA != ladoB && ladoC != ladoB) {
        console.log('Esse triângulo tem dois lados iguais, portanto ele é isósceles')
   } else if (ladoB == ladoC && ladoB != ladoA && ladoC != ladoA) {
        console.log('Esse triângulo tem dois lados iguais, portanto ele é isósceles')
   } else {
        console.log('Esse triângulo tem os três lados diferentes, portando ele é escaleno')
   }
}
classficacaoDeTriangulo()


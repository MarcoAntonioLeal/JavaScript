/*10) Escreva um programa que calcule o perímetro e a área de um triângulo, utilizando as fórmulas P = a + b + c e A = (b * h)/2, onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b.*/

function perimetro(ladoA, ladoB, ladoC) {
    console.log(`O perímetro do triângulo é: ${ladoA + ladoB + ladoC}`)
}

function area(base, altura) {
    console.log(`A área do triângulo é: ${(base * altura) / 2}`)
}

perimetro(2, 3, 5)
area(2, 3)

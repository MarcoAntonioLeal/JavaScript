/*09) Escreva um programa que calcule o perímetro e a área de retângulo utilizando as fórmulas P = 2(l + c) e A = lc, onde l é a largura e c é o comprimento.*/

function perimetro(largura, comprimento) {
    console.log(`O perímetro do retângulo é: ${2 * (largura + comprimento)}`)
}

function area(largura, comprimento) {
    console.log(`A área do retângulo é: ${largura * comprimento}`)
}

perimetro(2, 3)
area(2, 3)
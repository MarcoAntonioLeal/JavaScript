/*01) Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles.*/

function calcule(numero1, numero2) {
    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2

    console.log(
        `Soma = ${soma} | Subtração = ${subtracao} | Multiplicação = ${multiplicacao} | Divisão = ${divisao.toFixed(2)}`
    )
}

calcule(5, 3)
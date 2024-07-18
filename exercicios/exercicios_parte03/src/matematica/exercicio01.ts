/*01) Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles.*/

function operacoesMatematicas(valor1:number, valor2:number) {
    console.log(
        `Soma: ${valor1 + valor2}
        Subtração: ${valor1 - valor2}
        Multiplicação: ${valor1 * valor2}
        Divisão: ${valor1 / valor2}`
    )
}

operacoesMatematicas(5, 8)
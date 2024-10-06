/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacoesMatematicas(valor1: number, valor2:number) {
    console.log(
        `Soma: ${valor1} + ${valor2} = ${valor1 + valor2}
        Subtração: ${valor1} - ${valor2} = ${valor1 - valor2}
        Multiplicação: ${valor1} x ${valor2} = ${valor1 * valor2}
        Divisão: ${valor1} / ${valor2} = ${valor1 / valor2}`
    )
}

operacoesMatematicas(10, 5)
/*05) Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula IMC = peso / altura²*/

function classificacaoIMC(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc < 25) {
        return 'normal'
    } else if (imc < 30) {
        return 'sobrepeso'
    } else if (imc < 35) {
        return 'obesidade grau 1'
    } else if (imc < 40) {
        return 'obesidade grau 2'
    } else {
        return 'obesidade grau 3'
    }
}

function valorIMC(peso, altura) {
    const imc = (peso / Math.pow(altura, 2)).toFixed(2)
    console.log(imc + ' - ' + classificacaoIMC(imc))
}

valorIMC(80, 1.8)
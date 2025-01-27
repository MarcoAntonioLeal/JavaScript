/*Crie um programa que leia três números e verifique se a soma deles é positiva, negativa ou igual a zero */

function verificacaoDeNumeros(numero1, numero2, numero3) {
    const somaDosNumeros = numero1 + numero2 + numero3
    
    if (somaDosNumeros > 0) {
        console.log(`A soma dos números foi ${somaDosNumeros}, portanto ele é positivo`)
    } else if (somaDosNumeros < 0) {
        console.log(`A soma dos números foi ${somaDosNumeros}, portanto ele é negativo`)
    } else {
        console.log('A soma dos números foi 0')
    }
}

verificacaoDeNumeros(10, -5, 15)
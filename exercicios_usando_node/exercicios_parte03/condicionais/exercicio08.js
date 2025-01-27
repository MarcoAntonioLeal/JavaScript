/*Faça um programa que leia três números, e informe se a soma deles é divisível por 5 ou não */

function numerosDivisiveisPor5(numero1, numero2, numero3) {
    const somaDosNumeros = numero1 + numero2 + numero3

    if(somaDosNumeros % 5 === 0) {
        console.log(`A soma dos números foi ${somaDosNumeros}, esse número e divisível por 5`)
    } else {
        console.log(`A soma dos números foi ${somaDosNumeros}, esse número não e divisível por 5`)
    }
}
numerosDivisiveisPor5(10, 2, 30)
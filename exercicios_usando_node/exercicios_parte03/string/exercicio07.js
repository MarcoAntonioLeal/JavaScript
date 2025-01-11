/*Escreva um programa que receba um nome completo e exiba somente o primeiro nome */

const nome = 'Marco Antonio Stanziola Leal Filho'

//1ª forma de fazer
console.log(nome.split(' ')[0])

//2ª forma de fazer
let primeiroNome = ''

for(let i = 0; i < nome.length; i++) {
    if(nome[i] != ' ') {
        primeiroNome += nome[i]
    } else {
        break
    }
}

console.log(primeiroNome)
/*Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se pode ser lida da mesma forma de trás para frente) */

const nome = 'bala'

//1ª forma de fazer
const nomeInvertido = nome.split('').reverse().join('')

if(nome === nomeInvertido) {
    console.log('Essa palavra é um palíndromo')
} else {
    console.log('Essa palavra não é um palíndromo')
}

//2ª forma de fazer
let novoNome = ''

for(let i = nome.length; i > 0; i--) {
    novoNome += nome[i - 1]
}

if(nome === novoNome) {
    console.log('Essa palavra é um palíndromo')
} else {
    console.log('Essa palavra não é um palíndromo')
}
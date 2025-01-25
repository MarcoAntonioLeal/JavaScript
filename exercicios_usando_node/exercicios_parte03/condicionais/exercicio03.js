/*Escreva um programa que solicite três números diferentes ao usuário e exiba o maior deles */

const primeiroNumero = 15
const segundoNumero = 0
const terceiroNumero = 15

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log('O primeiro número é maior que os outros dois')
} else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log('O segundo número é maior que os outros dois')
} else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    console.log('O terceiro número é maior que os outros dois')
} else {
    console.log('Por favor refaça a operação')
}
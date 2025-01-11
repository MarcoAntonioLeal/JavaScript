/*Faça um programa que receba uma frase e exiba a quantidade de espaços em branco presentes na mesma */

const frase = 'Olá mundo, boa tarde! Estou fazendo o exercício 08'

//1ª forma de fazer
let quantEspacos = 0

for(let i = 0; i < frase.length; i++) {
    if(frase[i] === ' ') {
        quantEspacos += 1
    }
}

console.log(quantEspacos)

//2ª forma de fazer 
const arrayDeEspacos = frase.match(/\s/g)

console.log(arrayDeEspacos.length)
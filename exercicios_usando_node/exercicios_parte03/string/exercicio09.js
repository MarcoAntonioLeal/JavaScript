/*Crie um programa que leia uma palavra e exiba a quantidade de vogais presentes na mesma */

const frase = 'Ola mundo, boa tarde! Estou fazendo o exercicio 08'.toLowerCase()


let quantVogais = 0

for(let i = 0; i < frase.length; i++) {
    if(frase[i] === 'a' | frase[i] === 'e' | frase[i] === 'i' | frase[i] === 'o' | frase[i] === 'u') {
        quantVogais += 1
    }
}

console.log(quantVogais)

//2ª forma de fazer
const vogais = ['a', 'e', 'i', 'o', 'u']

for(let i = 0; i < frase.length; i++) {
    if(frase[i].includes(vogais)) {
        quantVogais += 1
    }
}

console.log(quantVogais)
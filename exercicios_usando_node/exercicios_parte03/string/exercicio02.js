/*Faça um programa que receba uma palavra e exiba cada letra separadamente*/

const nome = 'Marco Antonio Stanziola Leal Filho'
const novoNome = nome.replaceAll(' ', '')

//1ª forma de fazer
console.log(nome.replaceAll(' ', '').split(''))

//2ª forma de fazer
for(let i = 0; i < novoNome.length; i++) {
    console.log(novoNome[i])
}
/*Faça um programa que receba uma palavra e exiba cada letra separadamente*/

const nome = 'Marco Antonio Stanziola Leal Filho'
const novoNome = nome.replaceAll(' ', '')

console.log(nome.replaceAll(' ', '').split(''))

for(let i = 0; i < novoNome.length; i++) {
    console.log(novoNome[i])
}
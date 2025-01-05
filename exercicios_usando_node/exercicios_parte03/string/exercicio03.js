/*Crie um programa que receba uma frase e substitua todas as letras "a" por "e" */

const nome = 'Sayara da Silva Carneiro Stanziola Leal'

//1ª forma de fazer
console.log(nome.replaceAll('a', 'e'))

//2ª forma de fazer
console.log(nome.replace(/a/g, 'e'))

//3ª forma de fazer
const novoNome = nome.split('')

for(let i = 0; i < novoNome.length; i++) {
    if (novoNome[i] === 'A') {
        novoNome[i] = 'E'
    } else if (novoNome[i] === 'a') {
        novoNome[i] = 'e'
    }
}
console.log(novoNome.join(''))

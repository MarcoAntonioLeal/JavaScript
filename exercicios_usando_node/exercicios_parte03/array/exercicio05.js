/*05) Crie um programa que leia dois vetores de números inteiros com o mesmo tamanho e exiba um novo vetor com a soma dos elementos correspondentes dos dois vetores.*/

const primeiroArray = [5, 6, 8, 7, 5, 1];
const segundoArray = [2, 4, 1, 20, 35, 22];
const novoArray = []

for(let i = 0; i < primeiroArray.length; i++) {
    novoArray.push(primeiroArray[i] + segundoArray[i])
}

console.log(novoArray)
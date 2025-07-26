/*01) Crie um programa que leia um vetor de números interios e exiba a soma de tosos os elementos*/
const arrayExercicio01 = [1, 2, 3, 5, 8, 7, 3];

//Por for
let soma = 0

for(let i = 0; i < arrayExercicio01.length; i++) {
    soma += arrayExercicio01[i]
}

console.log(soma)

//Por reduce()
console.log(arrayExercicio01.reduce((acumulador, valorAtual) => valorAtual + acumulador))
/*03) Faça um programa que leia um vetor de números inteiros e exiba o menor elemento presente no vetor*/

const arrayExercicio03 = [5, 6, 8, 7, 5, 1, 10, 3, 66, 10];

let menorValor = arrayExercicio03[0]

for(let i = 0; i < arrayExercicio03.length; i++) {
    if(menorValor > arrayExercicio03[i]) {
        menorValor = arrayExercicio03[i]
    }
}

console.log(menorValor)

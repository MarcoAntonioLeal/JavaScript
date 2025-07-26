/*02) Faça um programa que leia um vetor de números inteiros e exiba o maior elemento presente no vetor*/
const arrayExercicio02 = [1, 55, 25, 7, 0, 38, 5, 11];

//Por for
let maiorValor = arrayExercicio02[0]

for(let i = 0; i < arrayExercicio02.length; i++) {
    if(arrayExercicio02[i] > maiorValor) {
        maiorValor = arrayExercicio02[i]
    }
}

console.log(maiorValor)
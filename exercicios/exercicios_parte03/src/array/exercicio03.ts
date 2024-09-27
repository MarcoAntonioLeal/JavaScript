/*03) Faça um programa que leia um vetor de números inteiros e exiba o menor elemento presente no vetor*/

const arrayExercicio03:number[] = [5, 6, 8, 7, 4, 1, 10, 3, 66, 10]

const menoresValoresEncontrados = []

let menorValor:number = arrayExercicio03[0]

for(let i = 0; i < arrayExercicio03.length; i++) {
    if(arrayExercicio03[i] < menorValor) {
        menorValor = arrayExercicio03[i]
    }
    let teste = menorValor
    console.log(teste)
}

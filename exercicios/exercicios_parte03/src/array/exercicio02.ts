/*02) Faça um programa que leia um vetor de números inteiros e exiba o maior elemento presente no vetor*/

const arrayExercicio02:number[] = [1, 5, 25, 7, 0, 38, 5, 11]

//Por for
let maiorValor:number = 0

for(let i = 0; i < arrayExercicio02.length; i++) {
    if(arrayExercicio02[i] > maiorValor) {
        maiorValor = arrayExercicio02[i]
    }
}

//console.log(maiorValor)

//Por metodo
let teste = arrayExercicio02.map(Number).reduce((a, b) => {
    return Math.max(a, b)
})

console.log(teste)
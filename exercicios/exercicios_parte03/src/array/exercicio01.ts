/*01) Crie um programa que leia um vetor de números interios e exiba a soma de tosos os elementos*/

const arrayExercicio01:number[] = [1, 2, 3, 5, 8, 7, 3]

//Por for
let soma:number = 0

for(let i:number = 0; i < arrayExercicio01.length; i++) {
    console.log(soma += arrayExercicio01[i])
}

//Por metodo reduce
console.log(arrayExercicio01.reduce((a, b) => a + b, 0))
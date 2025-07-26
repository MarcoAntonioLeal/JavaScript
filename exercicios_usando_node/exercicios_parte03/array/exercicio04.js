/*04) Escreva um programa que leia um vetor de números inteiros e exiba a média dos elementos.*/

const arrayExercicio04 = [5, 6, 8, 7, 5, 1, 10, 3, 66, 10];

let numerador = 0
let denominador = arrayExercicio04.length

//1ª forma de fazer
for(let i = 0; i < arrayExercicio04.length; i++) {
    numerador += arrayExercicio04[i]
}

if(denominador == 0) {
    console.log('Não existe divisão por 0')
} else {
    console.log((numerador / denominador).toFixed(0))
}

//2ª forma de fazer
let novoNumerador = arrayExercicio04.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0)

if(denominador == 0) {
    console.log('Não existe divisão por 0')
} else {
    console.log((novoNumerador / denominador).toFixed(0))
}
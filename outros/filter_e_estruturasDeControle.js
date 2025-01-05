const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// Crie um código que leia o array, e, a partir disso, crie um novo array com as notas menores que 7.0

//Resolvendo com estruturas de controle
let array = []
for (c in notas) {
    if (notas[c] < 7.0) {
        array.push(notas[c])
    }
}
console.log(array)
//Resultado [6.5, 5.2, 3.6]

//Resolvendo com callback
let novoArray = notas.filter(nota => nota < 7.0)
console.log(novoArray)
//Resultado [6.5, 5.2, 3.6]
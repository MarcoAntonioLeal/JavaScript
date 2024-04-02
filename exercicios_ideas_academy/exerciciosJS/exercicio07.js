//Faça um Programa que leia três números e mostre o maior deles.

function leitorDeNumeros(n1, n2, n3) {
    if(n1 > n2 && n1 > n3) {
        return `O maior número é o ${n1}`
    } else if(n2 > n1 && n2 > n3) {
        return `O maior número é o ${n2}`
    } else {
        return `O maior número é o ${n3}`
    }
}

console.log(leitorDeNumeros(20, 5, 15))
console.log(leitorDeNumeros(10, 50, 30))
console.log(leitorDeNumeros(20, 30, 55))
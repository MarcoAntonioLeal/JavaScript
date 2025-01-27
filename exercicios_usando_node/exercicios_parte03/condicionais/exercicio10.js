/*Faça um programa que leia três números e informe qual é o maior e qual é o menor */

function numero(numero1, numero2, numero3) {
    const array = [numero1, numero2, numero3]
    let menorNumero = numero1
    let maiorNumero = numero1

    array.forEach(num => {
        if(num < menorNumero) {
            menorNumero = num
        }

        if(num > maiorNumero) {
            maiorNumero = num
        }
    })

    return {maiorNumero, menorNumero}
}

console.log(numero(10, 115, 50))
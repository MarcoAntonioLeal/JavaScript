/*Faça um programa que leia três números e informe se eles podem ser os lados de um triângulo (a soma de dois lados deve ser sempre maior que o terceiro lado) */

function ladosTriangulo(lado1, lado2, lado3) {
    if((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {
        console.log('Esses lados formam um triângulo')
    } else {
        console.log('Esses lados não formam um triângulo')
    }
}

ladosTriangulo(30, 15, 20)
/*04) Escreva um programa que calcule a média geométrica entre três números informados pelo usuário*/

function mediaGeometrica(numero1, numero2, numero3) {
    console.log(Math.cbrt((numero1 * numero2 * numero3)).toFixed(2))
}

mediaGeometrica(3, 12, 16)
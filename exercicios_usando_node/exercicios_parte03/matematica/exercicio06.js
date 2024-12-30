/*06) Crie um programa que calcule e exiba o perímetro de um círculo, solicitando o raio ao usuário. C = 2 * π * r*/

function perimetroCirculo(raio) {
    const perimetroDoCirculo = (2 * Math.PI * raio).toFixed(2)
    return perimetroDoCirculo
}

console.log(perimetroCirculo(4))

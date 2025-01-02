/*12) Escreva um programa que calcule a energia cinética de um objeto em movimento, utilizando a fórmula E = (mv²)/2, onde E é a energia cinética, m é a massa do objeto e v é a velocidade.*/

function energiaCinetica(massa, volume) {
    console.log((massa * Math.pow(volume, 2) / 2))
}

energiaCinetica(4, 6)
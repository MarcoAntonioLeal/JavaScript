/*12) Escreva um programa que calcule a energia cinética de um objeto em movimento, utilizando a fórmula E = (mv²)/2, onde E é a energia cinética, m é a massa do objeto e v é a velocidade.*/

function energiaCinetica(massa:number, velocidade:number) {
    console.log((massa * Math.pow(velocidade, 2) / 2))
}

energiaCinetica(250, 10)
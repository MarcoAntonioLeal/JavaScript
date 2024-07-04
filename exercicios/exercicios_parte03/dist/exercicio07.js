/*07) Escreva um programa que calcule a área de um círculo a partir de raio, utilizando a fórmula (A = π r²).*/
function areaDoCirculo(raio) {
    console.log((Math.PI * Math.pow(raio, 2)).toFixed(2));
}
areaDoCirculo(4);

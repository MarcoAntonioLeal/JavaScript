/*04) Escreva um programa que calcule a média geométrica entre três números informados pelo usuário*/
function mediaGeometrica(valor1, valor2, valor3) {
    const primeiraParte = (valor1 * valor2 * valor3);
    console.log(Math.cbrt(primeiraParte));
}
mediaGeometrica(3, 7, 4);

/*14) Escreva um programa que leia a posição x e y de dois pontos no plano cartesiano e calcule a distância entre ambos.
Fórmula: dAB² = (xB – xA)² + (yB – yA)²*/
async function posicaoX(xA, xB) {
    const posicaoX = Math.pow((xB - xA), 2);
    return posicaoX;
}
async function posicaoY(yA, yB) {
    const posicaoY = Math.pow((yB - yA), 2);
    return posicaoY;
}
async function distanciaEntrePontos(xA, xB, yA, yB) {
    const valorX = await posicaoX(xA, xB);
    const valorY = await posicaoY(yA, yB);
    const somaDePontos = valorX + valorY;
    console.log(Math.sqrt(somaDePontos).toFixed(0));
}
distanciaEntrePontos(3, 6, 5, 1);

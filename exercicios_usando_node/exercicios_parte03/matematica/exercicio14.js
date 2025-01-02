/*14) Escreva um programa que leia a posição x e y de dois pontos no plano cartesiano e calcule a distância entre ambos.
Fórmula: dAB² = (xB – xA)² + (yB – yA)²*/

function distanciaEntrePontos(xA, yA, xB, yB) {
    const ordenadas = (Math.pow((xB - xA), 2))
    const abscissas = (Math.pow((yB - yA), 2))

    console.log(Math.sqrt(ordenadas + abscissas).toFixed(0))
}

distanciaEntrePontos(3, 6, 5, 1)
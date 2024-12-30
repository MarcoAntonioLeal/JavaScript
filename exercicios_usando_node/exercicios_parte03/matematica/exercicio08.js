/*08) Escreva um programa que calcule a equação de segundo grau (ax2 + bx + c = 0) utilizando as fórmulas de Bhaskara.

Δ = b2 – 4ac
x = (– b ± √Δ) / 2.a*/

async function valorDeDelta(a, b, c) {
    const delta = Math.pow(b, 2) - (4 * a * c)
    
    if(delta < 0) {
        return 'Delta negativo, ou seja, sem raízes reais'
    } else {
        return delta
    }
}

async function raizes(a, b, c) {
    const delta = await valorDeDelta(a, b, c)

    const primeiraRaiz = (-b + Math.sqrt(delta)) / 2 * a
    const segundaRaiz = (-b - Math.sqrt(delta)) / 2 * a

    console.log(primeiraRaiz, segundaRaiz)
}

raizes(1, 6, 5)
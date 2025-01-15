function operacoes(a, b) {
    const valorSoma = a + b
    const valorSub = a - b
    const valorMult = a * b
    const valorDiv = a / b
    
    return {valorSoma, valorSub, valorMult, valorDiv}
}

function valores({valorSoma, valorSub, valorMult, valorDiv}) {
    console.log(valorSoma, valorSub, valorMult, valorDiv)
}

valores(operacoes(2, 3))
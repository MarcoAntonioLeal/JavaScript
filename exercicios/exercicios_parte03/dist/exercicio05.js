/*05) Escreva um programa que calcule o IMC de um indivíduo, utilizando a fórmula IMC = peso / altura²*/
function classificacaoIMC(IMC) {
    if (IMC < 18.5) {
        return 'magreza';
    }
    else if (IMC < 24.9) {
        return 'normal';
    }
    else if (IMC < 29.9) {
        return 'sobrepeso';
    }
    else if (IMC < 39.9) {
        return 'obesidade';
    }
    else {
        return 'obesidade grave';
    }
}
function calculoDoIMC(peso, altura) {
    const valorIMC = (peso / (Math.pow(altura, 2)));
    console.log(`IMC: ${valorIMC.toFixed(2)} - ${classificacaoIMC(valorIMC)}`);
}
calculoDoIMC(75, 1.8);

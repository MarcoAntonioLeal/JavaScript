/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

Δ = b2 – 4ac
x = (– b ± √Δ) / 2.a*/
function valorDasRaizes(a, b, c) {
    const delta = (Math.pow(b, 2)) - (4 * a * c);
    if (delta > 0 || delta == 0) {
        return [
            ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2),
            ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)
        ];
    }
    else {
        return 'Delta negativo';
    }
}
console.log(valorDasRaizes(1, 6, 5));

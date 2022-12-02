// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

/* J = C × i × t
 * J = juros simples; C = capital inicial; i = taxa de juros; t = tempo da aplicação. */

// A fórmula para calcular os juros compostos é: M = C.(1-i)^n, sendo M o montante, C o capital inicial, i a taxa de juros e n o tempo.

function jurosSimples (capitalInicial, taxaJuros, tempoAplicaçao) {
    let simples = capitalInicial * (taxaJuros / 100) * tempoAplicaçao
    console.log(`R$ ${simples.toFixed(2)}`)
}
function jurosCompostos (capital, juros, tempo) {
    let composto = capital * (1 + juros / 100) ** tempo
    console.log(`R$ ${(composto + capital).toFixed(2)}`)
}
jurosSimples(100, 30, 5)
jurosCompostos(100, 30, 5)
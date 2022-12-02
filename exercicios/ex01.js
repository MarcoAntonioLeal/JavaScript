//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.


(function novasOperacoes(c, e) {
    console.log(c + e)
    console.log(c - e)
    console.log(c * e)
    console.log(c / e)
})(2, 6)

//ou

function operacoes(a = 0, b = 0) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}
operacoes(1, 5)
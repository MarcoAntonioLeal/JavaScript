/*Desafio1 (usa if): Fazer um algoritmo que ao receber o salário atual de um funcionário, calcule o valor do novo salário reajustado de acordo com:
Salário atual abaixo de 500 → ajuste de 15%
Salário atual entre 500 e 1000 → ajuste de 10%
Salário acima de 1000 → ajuste de 5%
Desafio2: tente colocar os resultados acima dentro de uma tag <h1></h1> do HTML ao invés de ser no “console.log” (procurar no google)*/

function reajusteDeSalario(salario) {
    if(salario < 500) {
        return salario * 1.15
    } else if (salario <= 1000) {
        return salario * 1.1
    } else {
        return salario * 1.05
    }
}

console.log('R$ ' + reajusteDeSalario(400).toFixed(2))
console.log('R$ ' + reajusteDeSalario(800).toFixed(2))
console.log('R$ ' + reajusteDeSalario(1500).toFixed(2))
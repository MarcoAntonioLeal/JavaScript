/*Faça um programa que tem como entrada o ano atual (2024) e a sua idade. A saída deve ser o ano que você nasceu.*/

function anoNascimento(idade) {
    return new Date().getFullYear() - idade
}

console.log(anoNascimento(34))
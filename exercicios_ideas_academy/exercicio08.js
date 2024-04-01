/*Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.*/

function diaSemana(...dia) {
    if(dia < 1 || dia > 7) {
        return 'Número inválido'
    } else if(dia == 1) {
        return 'Domingo'
    } else if(dia == 2) {
        return 'Segunda'
    } else if(dia == 3) {
        return 'Terça'
    } else if(dia == 4) {
        return 'Quarta'
    } else if(dia == 5) {
        return 'Quinta'
    } else if(dia == 6) {
        return 'Sexta'
    } else if(dia == 7) {
        return 'Sábado'
    }
}

for(let c = 0; c <= 7; c++) {
    console.log(diaSemana(c))
}


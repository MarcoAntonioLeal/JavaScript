/*Faça um programa que leia o ano de nascimento de uma pessoa e informe se ela está apta a votar (idade maior ou igual a 16 anos) */

function idadeAptaVotar(anoNascimento) {
    const idade = new Date().getFullYear() - anoNascimento

    if(idade >= 16) {
        console.log('Você tem idade para votar')
    } else {
        console.log('Você não tem idade para votar')
    }
}

idadeAptaVotar(2010)